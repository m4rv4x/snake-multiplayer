// This function checks if the snake has collided with the walls or with itself
export const checkCollision = (snake, boardSize) => {
  const [headX, headY] = snake[0];
  // Check if the snake has collided with the walls
  if (headX < 0 || headX >= boardSize || headY < 0 || headY >= boardSize) {
    return true;
  }
  // Check if the snake has collided with itself
  for (let i = 1; i < snake.length; i++) {
    const [segmentX, segmentY] = snake[i];
    if (headX === segmentX && headY === segmentY) {
      return true;
    }
  }
  return false;
};

// This function generates a random position for the food
export const generateFoodPosition = (snake, boardSize) => {
  let foodX, foodY;
  // Keep generating random positions until a valid one is found
  do {
    foodX = Math.floor(Math.random() * boardSize);
    foodY = Math.floor(Math.random() * boardSize);
  } while (snake.some(segment => segment[0] === foodX && segment[1] === foodY));
  return [foodX, foodY];
};

// This function sorts an array of players by their score in descending order
export const sortPlayersByScore = players => {
  return players.sort((a, b) => b.score - a.score);
};
