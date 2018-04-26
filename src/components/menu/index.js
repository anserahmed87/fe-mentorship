import React from 'react';

export const Menu = ({ links }) => (
    <ul>
        {links.map(link => (
            <li key ={link.url} >
                <a href={link.url}>{link.text}</a>
            </li>
        ))}
    </ul>
);