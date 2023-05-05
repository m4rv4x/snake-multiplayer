import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import '../styles/Chat.css';

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [socket]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      socket.emit('message', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="chat">
      <ChatMessages messages={messages} />
      <ChatInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

Chat.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Chat;
