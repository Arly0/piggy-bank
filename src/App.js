import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./components/auth";
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      // states
    };
  };

  // form auth data: auth_login & auth_pass
  sendAuth = (event) => {
    e.preventDefault();

    let login = event.target.elements.auth_login.value,
      password = event.target.elements.auth_pass.value


      // send API to backend & take response
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. 1223
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
        <Auth />
      </div>
    );
  };
}

export default App;
