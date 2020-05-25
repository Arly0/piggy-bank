import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import './../styles/auth.css';
import history from './history'

class Auth extends React.Component {
    constructor(){  
        super();  
        this.state = {  
            error: '',
        };  
    }  
    
    // form auth data: auth_login & auth_pass
  submitHandle = (event) => {
    event.preventDefault();

    let login = event.target.elements.auth_login.value,
      password = event.target.elements.auth_pass.value

        let tempJSON = JSON.stringify(
            {
                login: login,
                password: password 
            }
        );
      // send API to backend & take response
      axios.post(`http://arly0.beget.tech/user/login`, tempJSON)
      .then( (responce) => {
          if (responce.data.status === false) {
            this.setState({
                error: responce.data.message,
            });
          } else {
            // set token
            localStorage.setItem('token', responce.data.data.token);
            // history.push('/main');
            window.location.reload();
          }
      })
      .catch( (error) => {
          console.log(error);
          this.setState({
            error: "Unknown error",
        });
      });
  }

    render() {
        return (
            // html code
            <div className="comp__auth">

                { this.state.error != '' &&
                    <div className="error_block">
                        <p className="error_msg">{this.state.error}</p>
                    </div>
                }
                

                <form onSubmit={this.submitHandle} className="form form__auth">
    
                    <label>
                        <p className="auth__login_text">Enter your login</p>   
                        <input name={"auth_login"} className="auth__login_field" required type="text"  />
                    </label>
    
    
                    <label>
                        <p className="auth__pass_text">Enter your password</p>   
                        <input name={"auth_pass"} className="auth__pass_field" required type="password"  />
                    </label>
    
                    <button type="submit">send</button>
                </form>

                {/* ROUTER */}
                <div className="auth_reg" >
                    <Link to="/registration">
                        Регистрация!
                    </Link>
                </div>
            </div>
        );
    }
}

export default Auth;