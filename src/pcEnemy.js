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
  return enemyBoard;
}

function createEnemyBoard2(enemyBoard) {
  const ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ];

  while (ships.length > 0) {
    const currentShip = ships.shift();

    const randomCoord = [
      randomNum(enemyBoard.size),
      randomNum(enemyBoard.size),
    ];

    // const location = enemyBoard.board;

    if (enemyBoard.board[randomCoord[0]][randomCoord[1]] === null) {
      const emptySpaces = tryAllDirections(
        ['right', 'left', 'up', 'down'],
        randomCoord,
        currentShip,
      );

      if (emptySpaces) {
        for (const index of emptySpaces) {
          enemyBoard.board[index[0]][index[1]] = new Ship(currentShip.length);
        }
      }
    } else {
      createEnemyBoard2(new Gameboard(10));
    }
  }

  function getNextIndices(coords, direction, size) {
    const nextIndices = [];
    const [x, y] = coords;

    for (let i = 0; i < size; i++) {
      let newX = x;
      let newY = y;

      if (direction === 'right') {
        newY = y + i;
      } else if (direction === 'left') {
        newY = y - i;
      } else if (direction === 'down') {
        newX = x + i;
      } else {
        newX = x - i;
      }

      nextIndices.push([newX, newY]);
    }

    return nextIndices;
  }

  function tryDirection(direction, coords, ship) {
    const nextIndices = getNextIndices(coords, direction, ship.length);

    const isEmpty = (coords) => enemyBoard.board[coords[0]][coords[1]] === null;

    if (nextIndices.every(isEmpty)) {
      return nextIndices;
    }

    return false;
  }

  function tryAllDirections(directions, coords, ship) {
    if (directions.length === 0) {
      return false;
    }

    const direction = directions.shift();

    const nextIndices = tryDirection(direction, coords, ship);

    if (nextIndices) return nextIndices;
    return tryAllDirections(directions, coords, ship);
  }
}

function randomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function displayEnemyBoard(board) {}

export { createEnemyBoard, displayEnemyBoard, randomNum, createEnemyBoard2 };
