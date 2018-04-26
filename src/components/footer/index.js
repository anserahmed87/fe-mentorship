import React from 'react';
import { Menu } from '../';
import './styles.css';
const footerMenu = [
      { text: 'Pure UI',          url: 'https://rauchg.com/2015/pure-ui' },
      { text: 'Documentation',    url: 'https://reactjs.org/docs/' },
      { text: 'PropTypes',        url: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
      { text: 'Create react app', url: 'https://github.com/facebook/create-react-app/' },
      { text: 'github',           url: 'https://github.com/anserahmed87/fe-mentorship' },
    ];

export const Footer = () => (
    <div className="footer">
        <Menu links={footerMenu}/>
    </div>
);
