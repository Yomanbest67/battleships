let turn = null;

function setTurn(enemyBoard) {
  turn === 'player' ? (turn = 'enemy') : (turn = 'player');
  setFunctionality(enemyBoard);
}

function setFunctionality(enemyBoard) {
  const enemySquares = document.querySelectorAll(
    '.enemyBoard > .line > .square',
  );

  if (turn === 'player') {
    for (const square of enemySquares) {
      square.addEventListener('click', () => playerFunction(square));
    }
  } else {
    console.log('Enemy Turn');
  }

  const playerFunction = (square) => {
    enemyBoard.receiveAttack(square.id[1], square.id[4]);
    setTurn();
  };
}

export { setTurn };
