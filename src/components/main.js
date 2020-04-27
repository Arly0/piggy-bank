import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

// pages
import RegisterBank from './bank/bank_reg';
import Settings from './userSettings';

class Main extends React.Component {
  constructor () {
    super();
  };

  componentDidMount () {
    // take from DB info about all piggy-banks
    axios.get('http://arly0.beget.tech/moneybox/getinfo', {
      headers: {
        "PIGGY-BANK-TOKEN": localStorage.getItem('token')
      }
    })
    .then((repsonce) => {

    })
    .catch((error) => {
      
    })
  }
  
  render () {
    return (
      <div>
        <Router>
        <header>
          <Link to="/main/register">
            Register new piggy-bank
          </Link>
          <Link to="/main/settings">
            Settings
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/main/register" component={RegisterBank} />
            <Route exact path="/main/settings" component={Settings} />
          </Switch>
        </main>
        </Router>
      </div>
    );
  }
}

export default Main