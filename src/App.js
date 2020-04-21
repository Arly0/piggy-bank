import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './components/history'

// styles
import './styles/App.css';

// pages
import Auth from "./components/auth";
import Reg from "./components/reg";
import Main from "./components/main";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
    if(!localStorage.getItem('token')) {
      history.push('/');
    } else {
      history.push('/main');
    }
  };

  render() {
    if (!localStorage.getItem('token')) {
      return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Auth} />
              <Route path="/registration" exact component={Reg} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/main" component={Main} />
            </Switch>
          </Router>
        </div>
      );  
    }
  };
}

export default App;
