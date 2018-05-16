import React from 'react';
import {NewsItem} from "../";
import App from "../../App";

export const NewsItemList = ({ids}) => {
    console.log(ids)
    return (
        <ol >
            {ids.map(id => (
                <li key ={id}>
                    <NewsItem id={id}/>
                </li>
            ))}
        </ol>
    )
}
export default App;
