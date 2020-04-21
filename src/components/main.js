import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import RegisterBank from './bank/bank_reg';

class Main extends React.Component {
  constructor () {
    super();
  };
  
  render () {
    return (
      <div>
        <Router>
        <header>
          <Link to="/main/register">
            Register new piggy-bank
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/main/register" component={RegisterBank} />
          </Switch>
        </main>
        </Router>
      </div>
    );
  }
}

export default Main