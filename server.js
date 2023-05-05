const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./client/src/utils/helpers');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(bodyParser.json());

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });

  socket.on('move', (direction) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit('move', { id: user.id, direction });
    }
  });

  socket.on('food', (food) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit('food', food);
    }
  });

  socket.on('gameOver', () => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit('gameOver', user.id);
    }
  });

  socket.on('score', (score) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit('score', { id: user.id, score });
    }
  });

  socket.on('chatMessage', (message, callback) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', { user: user.name, text: message });
      callback();
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
