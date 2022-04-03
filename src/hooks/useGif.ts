import {useEffect, useState} from "react";
import axios from "axios";
import {saveAs} from 'file-saver';


const API_KEY = process.env.REACT_APP_API_KEY;
const GIF_URL = process.env.REACT_APP_GIF_URL;
const TAG_URL = process.env.REACT_APP_TAG;

interface IUseGif {
    gif: IGif,
    handleClick: (tag?: string) => void,
    loading: boolean,
    saveGif: (tag: string, title: string) => void
}

interface IGif {
    gifUrl: string,
    title: string
}

export const useGif = (tag?: string): IUseGif => {
    const [loading, setLoading] = useState<boolean>(true);
    const [gif, setGif] = useState<IGif>({gifUrl: "", title: ""});
    const fetchGET = async (tag?: string) => {
        if (API_KEY && GIF_URL) {
            const completeURL = tag ? GIF_URL + API_KEY + TAG_URL + tag : GIF_URL + API_KEY
            const {data} = await axios.get(completeURL)
            const imageSrc: string = data.data.images.downsized_large.url;
            const title: string = data.data.title;
            setGif({gifUrl: imageSrc, title: title});
        }
    }
    useEffect(() => {
        fetchGET(tag ? tag : "").then(() => setLoading(false))
    }, [])
    const handleClick = (tag?: string) => {
        setLoading(true);
        fetchGET(tag ? tag : "").then(() => setLoading(false));
    }
    const saveGif = (gif: string, title: string) => {
        saveAs(gif, title);
    }
    return {
        gif, handleClick, loading, saveGif
    }
}