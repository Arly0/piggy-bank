import React from 'react';
import axios from 'axios';

import close_icon from './../../img/close_icon.png';
import './../../styles/edit_modal.css';

class EditBank extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: '',
      title: props.title,
      amount: props.amount,
      comment: props.comment,
      target: props.target,
      id: props.id
    };
  };

  submitHandler = (event) => {
    event.preventDefault();

    const tempJSON = JSON.stringify(
      {
        moneybox_name: this.state.title,
        target: this.state.target,
        comment: this.state.comment,
        amount: this.state.amount
      }
    );
    // axios sned update info
    axios.post('http://arly0.beget.tech/moneybox/update?id=' + this.props.id)
    .then( (responce) => {
        // success -> TODO: close modal and load update data
    })
    .catch( (error) => {
      console.log(error);
      this.setState({
        error: "Unknown error. Try again later!"
      });
    });
  }

  closeModalHandler = (event) => {
    console.log(this.state.id);
    this.props.onChangeShow(this.state.id);
  }

  // handlers change input
  titleHandler = (event) => {
    this.setState({title: event.target.value})
  }
  targetHandler = (event) => {
    this.setState({target: event.target.value})
  }
  commentHandler = (event) => {
    this.setState({comment: event.target.value})
  }
  amountHandler = (event) => {
    this.setState({amount: event.target.value})
  }

  render () {
    return (
      <div className="relative__window">
        <div className="darkSide"></div>
        <div className="modal">
          <img onClick={this.closeModalHandler} src={close_icon} className="modal__close_icon" alt="Close modal window" />
          <h3 className="modal__title">
            Edit {this.props.title}
          </h3>

          <form onSubmit={this.submitHandler} className="edit modal__form">
            <div className="edit__paragraph edit__name">
              <label className="edit__label">
                <p className="edit__text">
                  Edit name of the piggy-bank
                </p>
                <input maxLength="30" onChange={this.titleHandler} type="text" className="edit__field" required value={this.state.title} placeholder="Enter name of the piggy-bank" name="name" />
              </label>
            </div>
            <div className="edit__paragraph edit__target">
              <label className="edit__label">
                <p className="edit__text">
                  Edit target of the piggy-bank
                </p>
                <input onChange={this.targetHandler} type="text" className="edit__field" required value={this.state.target} placeholder="Enter target of the piggy-bank" name="target" />
              </label>
            </div>
            <div className="edit__paragraph edit__comment">
              <label className="edit__label">
                <p className="edit__text">
                  Edit comment
                </p>
                <textarea onChange={this.commentHandler} className="edit__field" value={this.state.comment} placeholder="Enter comment of the piggy-bank" name="comment" ></textarea>
              </label>
            </div>
            <div className="edit__paragraph edit__amount">
              <label className="edit__label">
                <p className="edit__text">
                  Edit amount
                </p>
                <input onChange={this.amountHandler} type="number" className="edit__field" required value={this.state.amount} placeholder="Enter amount" name="amount" />
              </label>
            </div>

            <button type="submit" className="edit__submit">OK</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditBank;