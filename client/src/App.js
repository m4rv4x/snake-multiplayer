import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { API_URL, SOCKET_URL } from './utils/constants';
import { setAuthToken } from './utils/api';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Board from './components/Board';
import GameOver from './components/GameOver';
import Leaderboard from './components/Leaderboard';
import Rooms from './components/Rooms';
import JoinRoom from './components/JoinRoom';
import CreateRoom from './components/CreateRoom';

const socket = io(SOCKET_URL);

function App() {
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [players, setPlayers] = useState([]);
  const [food, setFood] = useState(null);
  const [snake, setSnake] = useState(null);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      socket.emit('join', { token }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, []);

  useEffect(() => {
    socket.on('user', (user) => {
      setUser(user);
    });

    socket.on('room', (room) => {
      setRoom(room);
    });

    socket.on('players', (players) => {
      setPlayers(players);
    });

    socket.on('food', (food) => {
      setFood(food);
    });

    socket.on('snake', (snake) => {
      setSnake(snake);
    });

    socket.on('score', (score) => {
      setScore(score);
    });

    socket.on('leaderboard', (leaderboard) => {
      setLeaderboard(leaderboard);
    });

    socket.on('rooms', (rooms) => {
      setRooms(rooms);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <Board
              socket={socket}
              user={user}
              room={room}
              players={players}
              food={food}
              snake={snake}
              score={score}
            />
          </Route>
          <Route path="/gameover">
            <GameOver score={score} />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard leaderboard={leaderboard} />
          </Route>
          <Route path="/rooms">
            <Rooms rooms={rooms} />
          </Route>
          <Route path="/joinroom/:id">
            <JoinRoom socket={socket} />
          </Route>
          <Route path="/createroom">
            <CreateRoom socket={socket} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
