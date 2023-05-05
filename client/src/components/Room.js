import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Players from './Players';
import Chat from './Chat';
import '../styles/Room.css';

const Room = ({ socket }) => {
  const [players, setPlayers] = useState([]);
  const [roomId, setRoomId] = useState('');
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    socket.on('roomData', ({ roomId, roomName, players }) => {
      setRoomId(roomId);
      setRoomName(roomName);
      setPlayers(players);
    });
  }, [socket]);

  return (
    <div className="room">
      <h1>{roomName}</h1>
      <Players players={players} />
      <Chat socket={socket} />
    </div>
  );
};

Room.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Room;
