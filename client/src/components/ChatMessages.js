import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import '../styles/Chat.css';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatMessages;
