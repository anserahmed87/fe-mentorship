import React from 'react';

import { Menu } from '../';

const footerMenu = [
      { text: 'Pure UI',          url: 'https://rauchg.com/2015/pure-ui' },
      { text: 'Documentation',    url: 'https://reactjs.org/docs/' },
      { text: 'PropTypes',        url: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
      { text: 'Create react app', url: 'https://github.com/facebook/create-react-app/' },
      { text: 'github',           url: 'https://github.com/vahidabbasi/mentor-ship' },
    ];

export const Footer = () => (
    <div>
        <Menu links={footerMenu}/>
    </div>
);
