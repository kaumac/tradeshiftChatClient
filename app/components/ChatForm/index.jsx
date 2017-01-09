import React from 'react';
require('./style.scss');

const ChatForm = ({ submitHandler }) => {
  var author, message;

  function submitMessage(e) {
    e.preventDefault();
    submitHandler(author.value, message.value);
  }

  return (
    <form className="chat-form" onSubmit={submitMessage.bind(this)}>
      <input type="text" className="chat-form-name" placeholder="Type your name" ref={(input) => { author = input; }} />
      <textarea className="chat-form-message" placeholder="Type your message" ref={(input) => { message = input; }} />
      <button className="chat-form-submit" type="submit">Send message</button>
    </form>
  );
}

export default ChatForm;
