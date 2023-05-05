import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import '../styles/Players.css';

const Players = ({ players }) => {
  return (
    <div className="players">
      <h2>Players</h2>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default Players;

