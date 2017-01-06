import React from 'react';
require('./style.scss');

export default class ChatForm extends React.Component {

  updateFormState(key, event) {
    let updatedStateObject = {};
    updatedStateObject[node] = event.target.value;
    this.setState(updatedStateObject);
  }

  submitMessage(e) {
    e.preventDefault();
    const author = this.state.author;
    const message = this.state.message;
    this.props.submitHandler(this.state.author, this.state.message);
  }

  render() {
    return (
      <form className="chat-form" onSubmit={this.submitMessage.bind(this)}>
        <input type="text" className="chat-form-name" placeholder="Type your name" onChange={this.updateFormState.bind(this, 'author')} />
        <textarea className="chat-form-message" placeholder="Type your message" onChange={this.updateFormState.bind(this, 'message')} />
        <button className="chat-form-submit" type="submit">Send message</button>
      </form>
    );
  }
}
