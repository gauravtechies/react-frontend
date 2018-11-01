import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Async, { Props as AsyncProps } from 'react-promise'
import { Link } from 'react-router-dom'
import { registerUser } from '../actions/user.action'
import { connect } from 'react-redux'

class RegistrationForm extends React.Component {
    
initState = {
    firstName: null,
    lastName: null,
    email: null,
    error: null
    }
constructor(props){
    super(props);
    this.state =this.initState;
    this.onSubmit = this.onSubmit.bind(this); 
 }

 onSubmit(e){
    e.preventDefault();
    const data = {
        "user":{
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
    }
    this.props.registerUser(data)
    .then(function (response) {
       toast.success("User registered successfully!", {
            position: toast.POSITION.TOP_CENTER
        });
    })
    .catch(function (error) {
        // if (error.response && error.response.data && Array.isArray(error.response.data)) {
        //     let errorMsg = error.response.data.map(function(msg, index){
        //         if(msg.field!="username"){
        //             return <li key={index}>{msg.message}</li>;
        //         }
        //     });
        //     currentComponent.setState({errorMsgs:<ul className="alert alert-danger">{errorMsg}</ul>})
        // }else{
        //     toast.error("Something went wrong.", {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
    });
  
  }
onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
    }
  render() {
    return (
        <div className="col-md-6 offset-3">
            <h2><center>Register</center></h2>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input id='firstName' name='firstName' onChange={this.onChange} required autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input id='lastName' name='lastName' onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id='email' name='email' type='text' onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" minCharacters="6"  emptyMessage="Password is invalid"  onChange={this.onChange} />
                </FormGroup>
                    <Button color="primary" className='btn-block'>Register </Button>
            </Form>
            <div className='row mt-3'>
                <div className='col-md-12 text-center small'>
                    Already registered? <Link to='/login'>Login here</Link>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) =>({
    user: state.users
})
export default connect(mapStateToProps, { registerUser })(RegistrationForm);