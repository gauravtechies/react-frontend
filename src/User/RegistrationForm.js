import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { registerUser } from '../actions/user.action'

class RegistrationForm extends Component {
    
initState = {
    firstName: null,
    lastName: null,
    email: null,
    isLoading: false,
    error: null
    }
constructor(props){
    super(props);
    this.state =this.initState;

}
onSubmit = (e) => {
    e.preventDefault()
    const data = {
        "user":{
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
    }
    // this.setState({ isLoading: true })
    registerUser(data)
    .then(function (response) {
       console.log(response)
     }).catch(function (error) {
        console.log(error)
     }); 
    

  }
onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
    console.log(state)
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
export default RegistrationForm;
