import React from 'react';
import {Menu} from '../';
import {Link} from 'react-router-dom';
import * as actions from '../../actions'
import './styles.css';
import { connect } from 'react-redux';


const mainMenu = [
    {text: 'New', url: 'https://news.ycombinator.com/newest'},
    {text: 'Show', url: 'https://news.ycombinator.com/show'},
    {text: 'Submit', url: 'https://news.ycombinator.com/submit'},
];

export const Header = (props) => (
    <div className="header">
        <Link to={`/`}>
            <span className="header_logo">
                 <img src="https://news.ycombinator.com/y18.gif" alt="React new logo"/>
            </span>
        </Link>
        <div className="header_menu">
            <Menu links={mainMenu}/>
        </div>
        <button  onClick={e=>{props.toggleTheme()}}>
            Toggle Theme
        </button>
    </div>
);

const  mapDispatchToProps={
    toggleTheme:actions.toggleTheme,
}
export default  connect(null,mapDispatchToProps)(Header)
