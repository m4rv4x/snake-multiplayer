import React from 'react';
import PropTypes from 'prop-types';
import { BOARD_SIZE } from '../utils/constants';
import '../styles/GameOver.css';

const GameOver = ({ score, onRestart }) => {
  return (
    <div className="game-over" style={{ width: `${BOARD_SIZE}px`, height: `${BOARD_SIZE}px` }}>
      <h1>Game Over</h1>
      <p>Your score: {score}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default GameOver;
