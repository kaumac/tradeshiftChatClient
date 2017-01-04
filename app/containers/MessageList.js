import React from "react";
import Message from "../components/message/Message";

export default class MessageList extends React.Component{
  render() {
    const messages = this.props.messages;

    return ( <div className="message-list"> { messages.map((message, key) => <Message key={key} message={message}/>) } </div> );
  }
}
