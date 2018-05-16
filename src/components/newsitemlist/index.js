import React from 'react';
import {NewsItem} from "../";
import { api } from '../../utils';

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
