import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/landing/landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Recipe from './components/recipe/recipe';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import drinkReducer from './reducers/drinkReducer';
import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Profile from './components/profile/profile';

const rootReducer = combineReducers({
    drinkReducer,
    userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/:drinkId' component={Recipe} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
