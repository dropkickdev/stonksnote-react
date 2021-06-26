import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from "react-router-dom"
import { Provider } from "react-redux"
import { createBrowserHistory } from 'history'

import store from "./app/redux/store"



export const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                {/*<BrowserRouter>*/}
                    <App />
                {/*</BrowserRouter>*/}
            </Router>
        </Provider>
    </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
