import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Auth from "./components/auth";
import Reg from './components/reg'
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      // states
    };
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            <Route exact path="/registration">
              <Reg />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
