import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';

class Auth extends React.Component {
    constructor(){  
        super();  
        this.state = {  
            error: '',
        };  
    }  
    
    // form auth data: auth_login & auth_pass
  sendAuth = (event) => {
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
      let responce = JSON.parse(axios.post(`http://arly0.beget.tech/user`,tempJSON));

      if (!responce.status) {
        this.setState({
            error: responce.message,
          });
      } else {
          
      }
  }

    render() {
        return (
            // html code
            <div className="comp__auth">
                <form onSubmit={this.sendAuth} className="form form__auth">
    
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