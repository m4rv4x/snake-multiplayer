import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chat.css';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message}</p>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
