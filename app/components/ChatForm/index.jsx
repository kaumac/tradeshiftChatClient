import React from 'react';
require('./style.scss');

export default class ChatForm extends React.Component {
  render() {
    return (
      <form className="chat-form">
        <input type="text" className="chat-form-name" placeholder="Type your name" />
        <textarea className="chat-form-message" placeholder="Type your message" />
        <button className="chat-form-submit">Send message</button>
      </form>
    );
  }
}
