import React from 'react';
import PropTypes from 'prop-types';
import Snake from './Snake';
import Food from './Food';
import Score from './Score';
import Players from './Players';
import Chat from './Chat';
import { BOARD_SIZE, SNAKE_SIZE } from '../utils/constants';
import '../styles/Board.css';

const Board = ({ food, snake, players, score, onDirectionChange, chatMessages, onSendMessage }) => {
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37:
        onDirectionChange('left');
        break;
      case 38:
        onDirectionChange('up');
        break;
      case 39:
        onDirectionChange('right');
        break;
      case 40:
        onDirectionChange('down');
        break;
      default:
        break;
    }
  };

  return (
    <div className="board" style={{ width: `${BOARD_SIZE}px`, height: `${BOARD_SIZE}px` }} tabIndex="0" onKeyDown={handleKeyDown}>
      <Snake snake={snake} />
      <Food food={food} />
      <Score score={score} />
      <Players players={players} />
      <Chat chatMessages={chatMessages} onSendMessage={onSendMessage} />
    </div>
  );
};

Board.propTypes = {
  food: PropTypes.arrayOf(PropTypes.number).isRequired,
  snake: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
  score: PropTypes.number.isRequired,
  onDirectionChange: PropTypes.func.isRequired,
  chatMessages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default Board;
