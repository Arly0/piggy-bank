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
import EditBank from './bank/bank_edit'

// css & pricture
import edit_icon from './../img/edit_icon.png';
import './../styles/main.css';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [], // piggy bank
      errorMsg: '',
    };

    this.showModalHandler = this.showModalHandler.bind(this);
  }

  parseDataHandler = (event) => {
    // take from DB info about all piggy-banks
    axios.get('http://arly0.beget.tech/moneybox/getinfo', {
      headers: {
        "PIGGY-BANK-TOKEN": localStorage.getItem('token')
      }
    })
    .then((responce) => {
      console.log(responce.data.data.moneybox);
      if (responce.data.status) {
        let tempData = responce.data.data.moneybox;
        tempData.map(el => {el.show = false});
        this.setState({data: tempData});
      } else {
        this.setState({errorMsg: responce.message});
      }
    })
    .catch((error) => {
      // for debug
      console.log(error);
      this.setState({errorMsg: 'Unknown error!'});
    })
  };

  componentDidMount () {
    this.parseDataHandler();
  }

  showModalHandler = (event, index) => {
    let tempData = [...this.state.data];
    console.log(tempData);
    for (const el of tempData) {
      if (el.moneybox_id === event) {
        el.show = true;
      }
    }
    this.setState({data: tempData});
  }

  closeModalHandler = (id) => {
    console.log(id);
    let tempData = [...this.state.data];
    for (const el of tempData) {
      if (el.moneybox_id === id) {
        el.show = false;
      }
    }
    this.setState({data: tempData});
    this.parseDataHandler();
  }
  
  render () {
    const table = [];
    for (const [index, el] of this.state.data.entries()) {
      table.push(<tr>
        <td className="table__item">{index+1}</td>
        <td className="table__item">{el.moneybox_name}</td>
        <td className="table__item">{el.target}</td>
        <td className="table__item">{el.comment}</td>
        <td className="table__item">{el.amount}</td>
        <td className="table__item"><img onClick={this.showModalHandler.bind(this, el.moneybox_id)} src={edit_icon} alt="Edit this piggy bank" className="table__edit_icon" /></td>
        <td>{ el.show ? <EditBank onChangeShow={this.closeModalHandler} id={el.moneybox_id} title={el.moneybox_name} target={el.target} comment={el.comment} amount={el.amount} /> : ' ' }</td>
      </tr>);
    }

    return (
      <div>
        <Router>
        <header className="header" id="header">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/main">
                Show my bancks
              </Link>
            </li>
            <li className="header__item">
              <Link to="/main/register">
                Register new piggy-bank
              </Link>
            </li>
            <li className="header__item">
              <Link to="/main/settings">
                Settings
              </Link>
            </li>
          </ul>
        </header>
        <main className="main" id="main">
          <Switch>
            <Route exact path="/main">
              <table className="table">
                <thead className="table__commonHead">
                  <tr className="table__head">
                    <th className="head__item">№</th>
                    <th className="head__item">Наименование</th>
                    <th className="head__item">Цель</th>
                    <th className="head__item">Комментарий</th>
                    <th className="head__item">Итоговая сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {/* cycle */}
                  {table}
                </tbody>
              </table>
            </Route>
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