import React from 'react';
import MessageList from 'containers/MessageList';
import ChatForm from 'components/ChatForm';
require('./style.scss');

const Chat = () => {
  const messagesMock = [
    {
      author: 'Kaue',
      date: 'random date',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptates.',
    },
    {
      author: 'Someone',
      date: 'random date c',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      author: 'Random dude',
      date: 'random date 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consequatur accusamus deleniti!',
    },
  ];

  function submitNewMessage(messageAuthor, messageText) {
    console.log(messageAuthor, messageText);
  }

  return(
    <div className='chat-wrapper'>
      <MessageList messages={messagesMock} />
      <ChatForm submitHandler={submitNewMessage.bind(this)} />
    </div>
  )
}

export default Chat;
