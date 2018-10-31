import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import RegistrationForm from './User/RegistrationForm';

class BaseLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {logged:true};
    }
    
    render() {
        return(
            <Router>
                <div>
                  <Header />
                     <div className="container-fluid">
                        <Switch>
                            <Route path="/register" component={RegistrationForm} />
                        </Switch>
                    </div>
                    <ToastContainer autoClose={5000} />
                </div>
            </Router>

  )}
}
ReactDOM.render(<BaseLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
