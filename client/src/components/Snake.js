import React from 'react';
import PropTypes from 'prop-types';
import { SNAKE_SIZE } from '../utils/constants';

const Snake = ({ snake }) => {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            left: `${segment[0] * SNAKE_SIZE}px`,
            top: `${segment[1] * SNAKE_SIZE}px`,
          }}
        />
      ))}
    </>
  );
};

Snake.propTypes = {
  snake: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Snake;
