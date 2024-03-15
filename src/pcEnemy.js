import Gameboard from './gameboard.js';
import Ship from './ship.js';

function createEnemyBoard(size) {
  const enemyBoard = new Gameboard(size);
  const ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ];

  while (ships.length > 0) {
    const currentShip = ships.shift();
    const createShip = new Ship(currentShip.length);

    const coordsStart = [randomNum(currentShip.length), randomNum(size)];
    let coordsEnd = null;

    if (randomNum(2) === 0) {
      coordsEnd = [coordsStart[0], coordsStart[1] + (currentShip.length - 1)];
    } else {
      coordsEnd = [coordsStart[0] + (currentShip.length - 1), coordsStart[1]];
    }

    try {
      enemyBoard.placeShip(createShip, coordsStart, coordsEnd);
    } catch (error) {
      // Empty
    }
  }

  function randomNum(limit) {
    return Math.floor(Math.random() * limit);
  }

  return enemyBoard;
}

function displayEnemyBoard(board) {}

export { createEnemyBoard, displayEnemyBoard };
