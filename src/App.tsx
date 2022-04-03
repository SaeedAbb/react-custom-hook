import React from "react";
import './App.css';
import {Random} from "./components/Random";
import {Tag} from "./components/Tag";

export const App = () => (
    <div>
        <h1>random gif app</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
    </div>
)