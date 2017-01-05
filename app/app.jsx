import React from 'react';
import ReactDOM from 'react-dom';
import Chat from 'containers/Chat';
require('./app.scss');

const appRootElement = document.getElementById('chat-app');

ReactDOM.render(<Chat />, appRootElement);
