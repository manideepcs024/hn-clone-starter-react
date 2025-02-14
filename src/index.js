/* eslint-disable import/no-webpack-loader-syntax,   import/first*/
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import {configureStore} from './store/configureStore';

const store = configureStore();





render(
    <Provider store={store}>
       <App />
    </Provider>,

    document.getElementById('root')



);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();



