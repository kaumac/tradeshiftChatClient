import React from "react";
require('./style.scss');

const Message = ({ author, text }) => (
  <div className="message">
    <div>
      <strong>{ author }</strong>
    </div>
    <div>
      { text }
    </div>
  </div>
)

Message.propTypes = {
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default Message;
