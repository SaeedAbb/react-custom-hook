import React, {useEffect, useState} from "react";
import axios from "axios";
import {useGif} from "../hooks/useGif";


export const Tag = () => {
    const [tag, setTag] = useState<string>("");
    const {loading, gif, handleClick, saveGif} = useGif(tag);
    const {gifUrl, title} = gif;

    return (<div className="container">
        {<div className="container">
            <h1>Random Gif</h1>
            {loading ? <h1>Loading</h1> : <div><img src={gifUrl} alt="image"/></div>}
            <input value={tag} onChange={(e) => setTag(e.target.value)}/>
            <button onClick={() => handleClick(tag)}>Click for a new</button>
            <button onClick={() => saveGif(gifUrl, title)}> save</button>
        </div>
        }
    </div>)


}