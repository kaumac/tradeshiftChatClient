import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from 'actions';
import MessageListContainer from 'containers/MessageListContainer';
import ChatForm from 'components/ChatForm';
require('./style.scss');

let Chat = ({ dispatch }) => {

  function submitNewMessage(messageAuthor, messageText) {
    dispatch(addMessage(messageAuthor, messageText));
  }

  return(
    <div className='chat-wrapper'>
      <MessageListContainer />
      <ChatForm submitHandler={submitNewMessage.bind(this)} />
    </div>
  )
}

Chat = connect()(Chat);

export default Chat;
