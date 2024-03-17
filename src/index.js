import Gameboard from './gameboard';
import { createEnemyBoard, randomNum, createEnemyBoard2 } from './pcEnemy.js';
import css from './style.css';
import { displayBoard, playerMessage } from './DOM.js';
import Ship from './ship.js';
import { setTurn } from './turnController.js';

let playerGameboard = new Gameboard(10);
let enemyBoard = new Gameboard(10);
driver();

function driver() {
  playerGameboard = new Gameboard(10);
  enemyBoard = new Gameboard(10);
  createEnemyBoard2(enemyBoard);

  displayBoard(enemyBoard, true);
  setupGame(playerGameboard);
}

function randomDriver() {
  displayBoard(playerGameboard);
  displayBoard(enemyBoard, true);

  startGame(enemyBoard, playerGameboard);
}

function setupGame(
  board,
  ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ],
) {
  displayBoard(board);

  if (ships.length === 0) {
    return startGame(enemyBoard, playerGameboard);
  }

  let firstCoord = 0;
  let secondCoord = 0;
  (function placeShips() {
    const currentShip = ships[0];

    playerMessage(
      `Place your ships! 
      Current Ship: Length ${currentShip.length}`,
    );

    const squares = document.querySelectorAll('.playerBoard > .line > .square');

    for (const square of squares) {
      square.addEventListener('click', () => setShipValues(square));
    }

    function setShipValues(square) {
      if (firstCoord === 0) {
        firstCoord = [parseInt(square.id[1]), parseInt([square.id[4]])];

        square.style.backgroundColor = 'blue';
      } else {
        secondCoord = [parseInt(square.id[1]), parseInt([square.id[4]])];

        if (
          firstCoord[0] !== secondCoord[0] &&
          firstCoord[1] !== secondCoord[1]
        ) {
          setupGame(board, ships);
        } else {
          const ship = new Ship(currentShip.length);

          board.placeShip(ship, firstCoord, secondCoord);
          ships.splice(0, 1);

          setupGame(board, ships);
        }
      }
    }
  })();
}

function startGame(enemyBoard, gameBoard) {
  playerMessage('Game Start! Your turn!');

  setTurn(enemyBoard, gameBoard);
}

(function resetButton() {
  const resetBtn = document.querySelector('.reset');

  resetBtn.addEventListener('click', () => {
    driver();
  });
})();

(function randomButton() {
  const resetBtn = document.querySelector('.random');

  resetBtn.addEventListener('click', () => {
    randomMap();
  });

  function randomMap() {
    const ships = [
      { length: 5 },
      { length: 4 },
      { length: 3 },
      { length: 3 },
      { length: 2 },
    ];

    while (ships.length > 0) {
      const currentShip = ships.shift();
      tryPlacing(currentShip);
    }

    function tryPlacing(currentShip) {
      const randomCoord = [
        randomNum(playerGameboard.size),
        randomNum(playerGameboard.size),
      ];

      // const location = playerGameboard.board;

      if (playerGameboard.board[randomCoord[0]][randomCoord[1]] === null) {
        const emptySpaces = tryAllDirections(
          ['right', 'left', 'up', 'down'],
          randomCoord,
          currentShip,
        );

        if (emptySpaces) {
          for (const index of emptySpaces) {
            playerGameboard.board[index[0]][index[1]] = new Ship(
              currentShip.length,
            );
          }
        }
      } else {
        tryPlacing(currentShip);
      }
    }

    randomDriver();

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

      const isEmpty = (coords) =>
        playerGameboard.board[coords[0]][coords[1]] === null;

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
})();
