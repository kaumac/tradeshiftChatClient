import React from 'react';
import { render } from 'react-dom';
import Chat from 'containers/Chat';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

require('./app.scss');

const store = createStore(reducers);
const appRootElement = document.getElementById('chat-app');

render(
  <Provider store={store}>
    <Chat />
  </Provider>, appRootElement
);
