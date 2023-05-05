import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import '../styles/Leaderboard.css';

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      {sortedPlayers.map((player, index) => (
        <Player key={player.id} player={player} index={index} />
      ))}
    </div>
  );
};

Leaderboard.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default Leaderboard;
