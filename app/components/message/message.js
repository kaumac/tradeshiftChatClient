import React from "react";

export default class Message extends React.Component {  
  render() {
    return (<div className="message-component"> { this.props.message.text } </div>)
  }
}
