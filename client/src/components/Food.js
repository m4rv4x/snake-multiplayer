import React from 'react';
import PropTypes from 'prop-types';
import { SNAKE_SIZE } from '../utils/constants';

const Food = ({ food }) => {
  return (
    <div
      className="food"
      style={{
        left: `${food[0] * SNAKE_SIZE}px`,
        top: `${food[1] * SNAKE_SIZE}px`,
      }}
    />
  );
};

Food.propTypes = {
  food: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Food;
