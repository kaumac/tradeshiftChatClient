import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from 'actions';

require('./style.scss');

let ChatForm = ({ dispatch }) => {
  var author, message;

  function submitMessage(e) {
    e.preventDefault();
    // submitHandler(author.value, message.value);
    dispatch(addMessage(author.value, message.value))
  }

  return (
    <form className="chat-form" onSubmit={submitMessage.bind(this)}>
      <input type="text" className="chat-form-name" placeholder="Type your name" ref={(input) => { author = input; }} />
      <textarea className="chat-form-message" placeholder="Type your message" ref={(input) => { message = input; }} />
      <button className="chat-form-submit" type="submit">Send message</button>
    </form>
  );
}

ChatForm = connect()(ChatForm);

export default ChatForm;
