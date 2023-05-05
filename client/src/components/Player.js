import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Player.css';

const Player = ({ player }) => {
  return (
    <div className="player">
      <div className="player-name">{player.name}</div>
      <div className="player-score">{player.score}</div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Player;
