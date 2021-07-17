import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './Common/Style/sass/styleSass.scss'
import './Common/Style/ConstStyle.css'
import './Common/Style/Yekan/css/fontStyle.css'

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./Common/ReduxFolder/Reducer/index";
import {createLogger } from "redux-logger";
import App from './App';
import {ToastContainer} from "react-toastify";
import UserProvider from "./Common/componennt/Provider/UserProvider";

const middleware=[];
if (process.env.NODE_ENV !=='production'){
    middleware.push(createLogger())
}
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware)));

// const store = createStore(reducer );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                 < UserProvider>
                    <App />
                    <ToastContainer />
                </UserProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);