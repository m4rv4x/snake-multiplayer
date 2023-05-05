import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chat.css';

const ChatInput = ({ inputValue, handleInputChange, handleSendMessage }) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

ChatInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
