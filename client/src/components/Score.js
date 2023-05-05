import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Score.css';

const Score = ({ score }) => {
  return (
    <div className="score">
      <h2>Score: {score}</h2>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
