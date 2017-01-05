import React from "react";
require('./style.scss');

export default class Message extends React.Component {  
  render() {
    return (<div className="message"> { this.props.message.text } </div>)
  }
}

Message.propTypes = {
  message: React.PropTypes.array.isRequired
}
