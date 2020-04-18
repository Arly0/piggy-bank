import React from "react";
import '../styles/reg.css'
class Reg extends React.Component {
  constructor(){  
    super();  
    this.state = {  
         errorForm: [],
    };  
}    

  // form reg user: reg_email & reg_login & reg_pass & reg_rpass & reg_name * reg_sname
  regUser = (event) => {
    event.preventDefault();
    
    let email = event.target.elements.reg_email.value,
      login   = event.target.elements.reg_login.value,
      pass    = event.target.elements.reg_pass.value,
      rpass   = event.target.elements.reg_rpass.value,
      name    = event.target.elements.reg_name.value,
      sname   = event.target.elements.reg_sname.value;

      let haveErrorForm = this.state.errorForm,
        errorFlag = false;

      if (pass !== rpass && !(haveErrorForm.includes("Password mismatch"))) {
        haveErrorForm.push("Password mismatch");
        errorFlag = true;
      } else if (pass === rpass && haveErrorForm.includes("Password mismatch")) {
        let indexOfEl = haveErrorForm.indexOf("Password mismatch");
        haveErrorForm.splice(indexOfEl, 1);
      }

      if(pass.length < 6 && !(haveErrorForm.includes("Password must be longer (6+)"))){
        haveErrorForm.push("Password must be longer (6+)");
        errorFlag = true;
      } else if (pass.length >= 6 && haveErrorForm.includes("Password must be longer (6+)")){
        let indexOfEl = haveErrorForm.indexOf("Password must be longer (6+)");
        haveErrorForm.splice(indexOfEl, 1);
      }

      this.setState({
        errorForm: [...haveErrorForm],
      })

      if (errorFlag) {
        return 0;
      }
  }

  render () {
    return (
      <div>
        <div className="errorMsg_block">
          {this.state.errorForm.map((value, index) => {
            return  <h3 className="errorMsg_text">{value}</h3>
          })}
        </div>
        <form className="centerBlock" onSubmit={this.regUser}>
          <div className="d-flex reg__mail_block">
            <label className="reg_label reg_email">
              <p>
                Enter mail
              </p>
              <input className="reg__email_field" required type="email" name="reg_email" />
            </label>

            <label className="reg_label reg_login">
              <p>
                Enter login
              </p>
              <input className="reg__login_field" required type="text" name="reg_login" />
            </label>
          </div>
          

          <div className="d-flex reg__pass_block">
            <label className="reg_label reg_pass">
              <p>
                Enter password
              </p>
              <input className="reg__pass_field" required type="password" name="reg_pass" />
            </label>

            <label className="reg_label reg_rpass">
              <p>
                Repeat password
              </p>
              <input className="reg__rpass_field" required type="password" name="reg_rpass" />
            </label>
          </div>

          <div className="d-flex reg__names_block">
            <label className="reg_label reg_name">
              <p>
                Enter name
              </p>
              <input className="reg__name_field" required type="text" name="reg_name" />
            </label>

            <label className="reg_label reg_name">
              <p>
                Enter surname
              </p>
              <input className="reg__sname_field" required type="text" name="reg_sname" />
            </label>
          </div>
          <br/>
          <button type="submit" className="reg__sbm">Continue</button>
        </form>
      </div>
    )
  }
}

export default Reg;