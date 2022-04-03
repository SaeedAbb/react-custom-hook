import React, {useEffect, useState} from "react";
import axios from "axios";
import {useGif} from "../hooks/useGif";


export const Random = () => {
    const {loading, gif, handleClick, saveGif} = useGif()
    const {gifUrl, title} = gif;
    return (<div className="container">
        {<div className="container">
            <h1>Random Gif</h1>
            {loading ? <h1>Loading</h1> : <div><img src={gifUrl} alt="image"/></div>}
            <button onClick={() => handleClick()}>Click for a new</button>
            <button onClick={() => saveGif(gifUrl,title)}> save</button>
        </div>
        }
    </div>)


}