import Ship from './ship.js';

function displayBoard(board, enemy = false) {
  let domPBoard = document.querySelector('.playerBoard');

  if (enemy) {
    domPBoard = document.querySelector('.enemyBoard');
  }

  while (domPBoard.firstChild) {
    domPBoard.removeChild(domPBoard.firstChild);
  }

  for (const line of board.board) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('line');
    let i = -1;
    for (const square of line) {
      i++;
      const boardSquare = document.createElement('div');
      boardSquare.classList.add('square');
      boardSquare.id = `[${board.board.indexOf(line)}, ${i}]`;

      switch (square) {
        case null:
          //   boardSquare.textContent = '0';
          break;
        case 'X':
          boardSquare.textContent = 'X';
          boardSquare.style.color = 'red';
          break;
        case 'O':
          boardSquare.textContent = 'O';
          boardSquare.style.color = 'yellow';
          break;
        default:
          if (enemy) {
            /* Do Nothing */
          } else boardSquare.style.backgroundColor = 'blue';
      }

      boardLine.appendChild(boardSquare);
    }

    domPBoard.appendChild(boardLine);
  }
}

function playerMessage(message, color) {
  const messageArea = document.querySelector('.playerMessage');

  if (color) {
    messageArea.style.color = color;
  }

  messageArea.textContent = message;
}

export { displayBoard, playerMessage };
