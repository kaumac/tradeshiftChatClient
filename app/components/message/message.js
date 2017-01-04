import React from "react";
require('./Message.scss');

export default class Message extends React.Component {  
  render() {
    return (<div className="message"> { this.props.message.text } </div>)
  }
}
