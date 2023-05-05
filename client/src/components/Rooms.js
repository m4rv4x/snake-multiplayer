import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import api from '../utils/api';
import '../styles/Rooms.css';

const Rooms = ({ socket }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.get('/rooms').then((response) => {
      setRooms(response.data);
    });
  }, []);

  const handleCreateRoom = (name) => {
    api.post('/rooms', { name }).then((response) => {
      setRooms((prevRooms) => [...prevRooms, response.data]);
    });
  };

  const handleJoinRoom = (roomId) => {
    socket.emit('joinRoom', roomId);
  };

  return (
    <div className="rooms">
      <h2>Rooms</h2>
      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.id} className="room">
            <Link to={`/room/${room.id}`} className="room-name">
              {room.name}
            </Link>
            <button className="join-room" onClick={() => handleJoinRoom(room.id)}>
              Join
            </button>
          </div>
        ))}
      </div>
      <CreateRoom handleCreateRoom={handleCreateRoom} />
      <JoinRoom handleJoinRoom={handleJoinRoom} />
    </div>
  );
};

Rooms.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Rooms;

