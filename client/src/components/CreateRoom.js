import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CreateRoom.css';

const CreateRoom = ({ handleCreateRoom }) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateRoom(roomName);
    setRoomName('');
  };

  return (
    <div className="create-room">
      <h3>Create Room</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(event) => setRoomName(event.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

CreateRoom.propTypes = {
  handleCreateRoom: PropTypes.func.isRequired,
};

export default CreateRoom;

