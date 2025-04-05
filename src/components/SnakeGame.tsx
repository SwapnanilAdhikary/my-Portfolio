import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 15 };
const GAME_SPEED = 150;

export const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  const checkCollision = (head: { x: number; y: number }) => {
    // Wall collision
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      return true;
    }

    // Self collision
    for (const segment of snake) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    if (!isPlaying) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
      };

      if (checkCollision(head)) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore(score + 1);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, isPlaying, score, generateFood]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[400px] h-[400px] border-2 border-green-500 bg-black">
        {/* Food */}
        <div
          className="absolute w-[20px] h-[20px] bg-red-500"
          style={{
            left: `${food.x * CELL_SIZE}px`,
            top: `${food.y * CELL_SIZE}px`,
          }}
        />

        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute w-[20px] h-[20px] bg-green-500"
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
            }}
          />
        ))}

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-red-500 text-2xl mb-4">GAME OVER</h3>
              <p className="text-green-500 mb-4">Score: {score}</p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-green-500 text-black hover:bg-green-400"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-green-500 text-black hover:bg-green-400"
            >
              Start Game
            </button>
          </div>
        )}
      </div>

      <div className="text-green-500">
        <p>Score: {score}</p>
        <p className="text-sm">Use arrow keys to control the snake</p>
      </div>
    </div>
  );
};