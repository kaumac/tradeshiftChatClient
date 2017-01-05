import React from 'react';

export default class ChatForm extends React.Component {
  render() {
    return (
      <form className='chat-form'>
        <input type='text' className='chat-form-name' />
        <textarea className='chat-form-message' />
      </form>
    )
  }
}
