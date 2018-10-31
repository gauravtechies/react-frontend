import React from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
class Header extends React.Component{
    constructor(props){
        super(props);
        
        // this.state = this.initState;
       
    }
   
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">React App</a>
                    <ul className="navbar-nav">
                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    
                    <li className="nav-item"><Link to='/register' className="nav-link">Register</Link></li>
                    <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;