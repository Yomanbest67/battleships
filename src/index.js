import { Gameboard, randomMap } from './gameboard.js';
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
  randomMap(enemyBoard);

  displayBoard(enemyBoard, true);
  setupGame(playerGameboard);
}

function randomDriver() {
  playerGameboard = new Gameboard(10);
  enemyBoard = new Gameboard(10);

  randomMap(playerGameboard);
  randomMap(enemyBoard);

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
    randomDriver();
  });
})();
