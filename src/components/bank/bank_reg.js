import React from 'react';

// styles
import './../../styles/bank_reg.css';

class RegisterBank extends React.Component {
  constructor () {
    super();
  };

  submitHandler = (event) => {

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
            <input type="text" className="reg_bank__field" required minLength="2" maxLength="50"  />
          </label>

          <label className="reg_bank__label reg_bank_target">
            <p className="reg_bank__text"><span className="required_symbol">*</span>Enter your traget for piggy-bank (phone, clothes, etc.)</p>
            <input type="text" className="reg_bank__field" required maxLength="200" />
          </label>

          <label className="reg_bank__label reg_bank_comment">
            <p className="reg_bank__text">Enter comment</p>
            <input type="text" className="reg_bank__field" required minLength="2" maxLength="50"  />
          </label>
        </form>
      </div>
    );
  }
}

export default RegisterBank