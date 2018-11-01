import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.component'
import reducers from './reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import RegistrationForm from './User/RegistrationForm';
import Login from './User/Login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware())))

class BaseLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {logged:true};
    }
    
    render() {
        return(
            <Provider store={store}>
            <Router>
                <div>
                  <Header />
                     <div className="container-fluid">
                        <Switch>
                            <Route path="/" exact component={App} />
                            <Route path="/register" component={RegistrationForm} />
                            <Route path="/login" component={Login} />

                        </Switch>
                    </div>
                    <ToastContainer autoClose={5000} />
                </div>
            </Router>
            </Provider>

  )}
}
ReactDOM.render(<BaseLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
