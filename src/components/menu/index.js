import React from 'react';
import './styles.css';

export const Menu = ({ links }) => (
    <ul className="unstyle menu">
        {links.map(link => (
            <li key ={link.url} className="unstyle menu_item">
                <a href={link.url}>{link.text}</a>
            </li>
        ))}
    </ul>
);