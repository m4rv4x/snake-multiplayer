import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/JoinRoom.css';

const JoinRoom = ({ handleJoinRoom }) => {
  const [roomId, setRoomId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleJoinRoom(roomId);
  };

  return (
    <div className="join-room-container">
      <h3>Join Room</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

JoinRoom.propTypes = {
  handleJoinRoom: PropTypes.func.isRequired,
};

export default JoinRoom;

