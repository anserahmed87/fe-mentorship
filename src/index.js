import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//export { * } from './page';
//export { * } from './header';
//export { * } from './content';
//export { * } from './footer';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
