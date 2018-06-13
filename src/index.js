import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {dataReducer} from './reducers/index.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import * as ducks from './ducks';

const rootReducer = combineReducers({
    ...ducks.ui.reducer,
   // ...ducks.itemsIds.reducer,
    //...ducks.items.reducer,
    ...ducks.data.reducer,
    data: dataReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();

// ROOT

