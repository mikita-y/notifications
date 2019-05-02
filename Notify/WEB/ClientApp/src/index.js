import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import rootReducer from './actions/reducer'
import { authenticationSetUser } from './actions/authentication'
import App from './components/App/App';

console.log(process.env.REACT_APP_API_URL);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
store.subscribe(() => {
    if (localStorage.getItem("accessToken")) {
        const user = {
            token: localStorage.getItem("accessToken"),
            userId: localStorage.getItem("userId"),
            userName: localStorage.getItem("userName")
        };
        if (!store.getState().authentication.user)
            store.dispatch(authenticationSetUser(user));
    }
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root'));
    
    
