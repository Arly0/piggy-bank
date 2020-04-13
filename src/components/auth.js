import React from 'react';
import { render } from '@testing-library/react';

class Auth extends React.Component {
    constructor(){  
        super();  
        this.state = {  
             loginValue: '',
             passValue: '',
        };  
    }  
    

    render() {
        return (
            // html code
            <div className="comp__auth">
                <form onSubmit={this.props.sendAuth} className="form form__auth">
    
                    <label>
                        <p className="auth__login_text">Enter your login</p>   
                        <input value={this.state.loginValue} name={"auth_login"} className="auth__login_field" required type="text"  />
                    </label>
    
    
                    <label>
                        <p className="auth__pass_text">Enter your password</p>   
                        <input value={this.state.passValue} name={"auth_pass"} className="auth__pass_field" required type="password"  />
                    </label>
    
                </form>

                <div>
                    {this.state.loginValue}
                    {this.state.passValue}
                </div>
            </div>
        );
    }
}

export default Auth;