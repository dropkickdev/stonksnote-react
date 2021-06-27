import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom"
import { Provider } from "react-redux"
import { createBrowserHistory } from 'history';

import store from "./app/redux/store"


// Sauce: https://github.com/ReactTraining/react-router/issues/3498#issuecomment-301057248
// Samples: https://www.tabnine.com/code/javascript/functions/history/createBrowserHistory
export const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
