import React from 'react';
import axios from 'axios';

// css 
import './../styles/auth.css';

class Settings extends React.Component {
  constructor () {
      super();
      this.state = {
        error: '',
      };
  }

  submitHandler = (event) => {
    event.preventDefault();

    let pass = event.target.elements.password.value,
        repeatPass = event.target.elements.rpassword.value;

    if (pass === repeatPass) {
      this.setState({error: ''});
      // success -> send request
      axios.post('http://arly0.beget.tech/user/update', {
        headers: {
          "PIGGY-BANK-TOKEN": localStorage.getItem('token')
        }
      })
      .then((responce) => {
          // success info 
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "Unknown error. Try again later!"
        })
      });
    } else {
      this.setState({error: 'Password and repeat password missmatch!'});
    }
  }

  render () {
    return (
      <div>
        <h2 className="change_pass__title">
          User Settings
        </h2>
        { this.state.error && 
          <div className="error_block">
            <p className="error_msg">{this.state.error}</p>
          </div>
        }
        <form onSubmit={this.submitHandler} className="change_pass__form">
          <label className="change_pass__label">
            <p>
              changes password
            </p>
            <input type="password" name="password" className="cp__field cp__pass" required />
          </label>
          <label className="repeat_pass__label">
            <p>
              repeat password
            </p>
            <input type="password" name="rpassword" className="rp__field rp__pass" required />
          </label>

          <br />
          <button type="submit">
            Change password
          </button>
        </form>
      </div>
    );
  }
}

export default Settings;