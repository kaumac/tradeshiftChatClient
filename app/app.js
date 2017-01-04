import React from "react";
import ReactDOM from "react-dom";
import MessageList from "./containers/MessageList";

const appRootElement = document.getElementById('chat-app');

let messagesMock = [
 { 
    author: "Kaue",
    date: "random date",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptates."
  },
  { 
    author: "Someone",
    date: "random date c",
    text: "Lorem ipsum dolor sit amet."
  },
  { 
    author: "Random dude",
    date: "random date 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus ipsam, quibusdam consequatur accusamus deleniti!"
  }
]

ReactDOM.render(<MessageList messages= { messagesMock } />, appRootElement);
