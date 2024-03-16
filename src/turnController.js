import { randomNum } from './pcEnemy.js';
import { Gameboard } from './gameboard.js';
import { displayBoard } from './DOM.js';

let turn = null;

function setTurn(enemyBoard, playerBoard) {
  displayBoard(enemyBoard, true);
  displayBoard(playerBoard);

  turn === 'player' ? (turn = 'enemy') : (turn = 'player');
  setFunctionality(enemyBoard, playerBoard);
}

function setFunctionality(enemyBoard, playerBoard) {
  const enemySquares = document.querySelectorAll(
    '.enemyBoard > .line > .square',
  );

  if (turn === 'player') {
    for (const square of enemySquares) {
      const handler = (event) => {
        playerFunction(square);
      };

      square.addEventListener('click', handler);
      square._clickListener = handler; // Store the handler for later removal
    }
  } else {
    console.log('Enemy Turn');
    for (const square of enemySquares) {
      const handler = square._clickListener;

      if (handler) {
        square.removeEventListener('click', handler);
      }
    }

    // Get random coordinate and attack.
    let attackSpot = [randomNum(10), randomNum(10)]; // Hardcoded value;

    while (
      typeof playerBoard.board[attackSpot[0]][attackSpot[1]] === 'string'
    ) {
      attackSpot = [randomNum(10), randomNum(10)];
    }

    playerBoard.receiveAttack(attackSpot[0], attackSpot[1]);

    setTurn(enemyBoard, playerBoard);
  }

  const playerFunction = (square) => {
    if (typeof enemyBoard.board[square.id[1]][square.id[4]] !== 'string') {
      enemyBoard.receiveAttack(square.id[1], square.id[4]);
      setTurn(enemyBoard, playerBoard);
    }
  };
}

export { setTurn };
