import io from 'socket.io-client';

const socket = io();

export const createRoom = (roomName, playerName) => {
  return new Promise((resolve, reject) => {
    socket.emit('createRoom', { roomName, playerName }, (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.roomId);
      }
    });
  });
};

export const joinRoom = (roomId, playerName) => {
  return new Promise((resolve, reject) => {
    socket.emit('joinRoom', { roomId, playerName }, (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve();
      }
    });
  });
};

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    socket.emit('getRooms', (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.rooms);
      }
    });
  });
};

export const leaveRoom = () => {
  socket.emit('leaveRoom');
};

export const startGame = () => {
  socket.emit('startGame');
};

export const changeDirection = (direction) => {
  socket.emit('changeDirection', direction);
};

export const sendChatMessage = (message) => {
  socket.emit('sendChatMessage', message);
};

export const getChatMessages = () => {
  return new Promise((resolve, reject) => {
    socket.emit('getChatMessages', (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.messages);
      }
    });
  });
};

export const getLeaderboard = () => {
  return new Promise((resolve, reject) => {
    socket.emit('getLeaderboard', (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.leaderboard);
      }
    });
  });
};

export const getRoomData = () => {
  return new Promise((resolve, reject) => {
    socket.emit('getRoomData', (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.roomData);
      }
    });
  });
};

