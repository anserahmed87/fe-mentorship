import React from 'react';
import {Menu} from '../';
import {Link} from 'react-router-dom';
import './styles.css';

const mainMenu = [
    {text: 'New', url: 'https://news.ycombinator.com/newest'},
    {text: 'Show', url: 'https://news.ycombinator.com/show'},
    {text: 'Submit', url: 'https://news.ycombinator.com/submit'},
];

export const Header = () => (
    <div className="header">
        <Link to={`/`}>
            <span className="header_logo">
                 <img src="https://news.ycombinator.com/y18.gif" alt="React new logo"/>
            </span>
        </Link>
        <div className="header_menu">
            <Menu links={mainMenu}/>
        </div>
    </div>
)
