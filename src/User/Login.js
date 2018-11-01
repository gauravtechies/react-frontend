import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { authenticateUser } from '../../../actions/user.action'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {password:'', email:'' , firstNameErr: '',lastNameErr: ''};
        // this.state = this.initState;
       
    }
     submitHandler = (e) =>{
         e.preventDefault();
        var current_instance=this;
        const data = {email: this.state.email, password: this.state.password}
        this.props.authenticateUser(data)
        .then(function (response) {
           if (response.value.data.auth_token) {
                sessionStorage.setItem('user', JSON.stringify(response.value.data));
            }
            toast.success("Logged in successfully!", {
                position: toast.POSITION.TOP_CENTER
            });
            current_instance.props.history.push('/About')
        }).catch(function (error) {
            // return callback(new Error('Invalid email and password'));
            if (error.response && error.response.data && Array.isArray(error.response.data.error.user_authentication)) {
                var error_message =error.response.data.error.user_authentication;
                
                    error_message.map(function(msg,index ){
                        current_instance.setState({
                                firstNameErr: msg,

                          });
                        });
                       
                        
            }else{
                toast.error("Something went wrong.", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }); 
      

    }
  
    inputHandler = (e) => {
        const target = e.target;
        this.setState({[target.name]:target.value});
    }
    clearForm = (e) => {
        this.setState(this.initState);
    }
  render() {
    return (
        <div>
           
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-7">
                    <div className="card card-lg text-center">
                        <div className="card-body">
                            <div className="mb-5">
                                <h1 className="h2 mb-2">Login</h1>
                                <span>Sign in to your account to continue</span>
                            </div>
                            <p className="text-danger">{this.state.lastNameErr}</p>
                            <p className="text-danger">{this.state.firstNameErr}</p>
                            
                            <div className="row no-gutters justify-content-center">
                                 <form className="text-left col-lg-8" onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="login-username">Email</label>
                                        <input className="form-control form-control-lg" type="email" name="email" id="email" placeholder="Enter Email" onChange={this.inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="login-password">Password</label>
                                        <input className="form-control form-control-lg" type="password" name="password" id="password" placeholder="Enter a password" onChange={this.inputHandler} />
                                    </div>
                                    <div>
                                        <div className="custom-control custom-checkbox align-items-center">
                                            <input type="checkbox" className="custom-control-input" value="box-1" name="box-1" checked="" id="check-remember" />
                                            <label className="custom-control-label text-small" htmlFor="check-remember">Remember me next time</label>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-lg btn-primary">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <span className="text-small">Don't have an account yet? <a href="#">Create one</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
    self: state.users
  })
  
export default connect(mapStateToProps, { authenticateUser })(Login)
