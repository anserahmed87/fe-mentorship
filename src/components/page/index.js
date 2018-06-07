import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import * as ducks from '../../ducks'


export const Page = ({ children,isDarkTheme }) =>{
    const className=isDarkTheme?'page page-dark':'page';
    return    (
    <div className={className}>
        { children }
    </div>
);
}



const mapStateToProps = state => {
    return {
        isDarkTheme: ducks.ui.selectors.isDarkTheme,
    }
};
export default  connect(mapStateToProps,null)(Page)
