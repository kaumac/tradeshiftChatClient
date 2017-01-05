import React from 'react';
import MessageList from 'containers/MessageList';
import ChatForm from 'components/ChatForm';

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

export default class Chat extends React.Component {
  render() {
    return(
      <div className='chat-wrapper'>
        <MessageList messages={messagesMock} />
        <ChatForm/>
      </div>
    );
  }
}
