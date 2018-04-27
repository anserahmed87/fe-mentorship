import React from 'react';
import { Menu } from '../';
import './styles.css';

const mainMenu = [
      { text: 'New',    url: 'https://news.ycombinator.com/newest' },
      { text: 'Show',   url: 'https://news.ycombinator.com/show' },
      { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
    ];

export const Header = () => (
    <div className="header">
        <span className="header_logo">
         <img src="https://news.ycombinator.com/y18.gif" alt= "React new logo" />
            news here
        </span>
        <div className="header_menu">
            <Menu links={mainMenu}/>
        </div>
    </div>
)
