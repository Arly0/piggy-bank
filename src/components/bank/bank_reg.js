import React from 'react';
import axios from 'axios';
// styles
import './../../styles/bank_reg.css';

class RegisterBank extends React.Component {
  constructor () {
    super();
    this.state = {
      conditionList: [''],
    };
  };

  newConditionHandler = (event) => {
    let fullList = this.state.conditionList;
    this.setState({
      conditionList: [...fullList, ''],
    });
  }

  deleteConditionHandler(event, index) {
      let temp = this.state.conditionList;
      console.log(temp);
      temp.splice(index, 1);

      this.setState({
       conditionList: temp, 
      });
  }

  submitHandler = (event) => {
    event.preventDefault();

    let moneybox_name = event.target.elements.moneybox_name.value,
      moneybox_target = event.target.elements.moneybox_target.value,
      moneybox_comment = event.target.elements.moneybox_comment.value,
      moneybox_condition = [];

      // event.target.elements.moneybox_condition.forEach((item, index) => {
        // moneybox_condition[index] = item.value;
      // });

      // TODO: moneybox_condition[0] сменить на передачу масива когда на беке переделают
      axios.post('http://arly0.beget.tech/moneybox', 
      {},
      {
        headers: {
          "VITYAPOCHEMUNESKAZALHEADER": localStorage.getItem('token')
        },
        data: {
          moneybox_name: moneybox_name,
          target: moneybox_target,
          comment: moneybox_comment,
          task: 'Vitya xyi ;D'
        }
      })
      .then( (responce) => {
          console.log('success');
      })
      .catch( (error) => {
        console.log('error');
      });
  }

  render () {
    return (
      <div>
        <h2 className="bank__register">
          Create new piggy-bank
        </h2>

        <form onSubmit={this.submitHandler}>
          <hr></hr>

          <label className="reg_bank__label reg_bank_name">
            <p className="reg_bank__text"><span className="required_symbol">*</span>Enter name your piggy-bank (2-50 letters)</p>
            <input type="text" className="reg_bank__field" name="moneybox_name" required minLength="2" maxLength="50"  />
          </label>

          <label className="reg_bank__label reg_bank_target">
            <p className="reg_bank__text"><span className="required_symbol">*</span>Enter your traget for piggy-bank (phone, clothes, etc.)</p>
            <input type="text" className="reg_bank__field" name="moneybox_target" required maxLength="200" />
          </label>

          <label className="reg_bank__label reg_bank_comment">
            <p className="reg_bank__text">Enter comment</p>
            <input type="text" className="reg_bank__field" name="moneybox_comment" required minLength="2" maxLength="50"  />
          </label>

          <label className="reg_bank__label reg_bank_condition">
            <p className="reg_bank__text"><span className="required_symbol">*</span>Enter conditions</p>

            {this.state.conditionList.map((value, index) => {
              return (
                <div className="d-flex">
                  <input type="text" name="moneybox_condition" className="reg_bank__field" required />
                  <button onClick={(e) => this.deleteConditionHandler(e, index)} type="button" className="cond__delete">X</button>  
                </div>
              );
            })}
          </label>
          <button type="button" onClick={this.newConditionHandler}>New condition</button>

          <br /> <br />
          <button className="register_biggy_bank" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterBank