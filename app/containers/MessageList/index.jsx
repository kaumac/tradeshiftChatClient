import React from 'react';
import Message from 'components/Message';
require('./style.scss');

const MessageList = ({ messages }) => {
  return (
    <div className='message-list'>
      { messages.map(
        (message, key) => <Message key={key} author={message.author} text={message.text} />
      ) }
    </div>
  );
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList;
