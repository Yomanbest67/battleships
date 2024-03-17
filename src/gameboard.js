import Ship from './ship.js';

class Gameboard {
  constructor(size) {
    this.size = size;
    this.rows = size;
    this.columns = size;
    this.board = this.makeBoard();
  }

  makeBoard() {
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      board.push(new Array(this.columns).fill(null));
    }

    return board;
  }

  receiveAttack(x, y) {
    const location = this.board[x][y];

    switch (location) {
      case null:
        this.board[x][y] = 'O';
        return 'miss';
      default:
        this.board[x][y].hit();
        this.board[x][y] = 'X';
        return 'hit';
    }
  }

  placeShip(ship, start, end) {
    if (this.board[start[0]] === this.board[end[0]]) {
      let wid = 0;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[start[0]][start[1] + i] === null) {
          wid++;
        }
      }

      if (wid === ship.length) {
        for (let i = 0; i < ship.length; i++) {
          this.board[start[0]][start[1] + i] = ship;
        }
      } else {
        throw new Error("Can't place ship!");
      }
    } else if (this.board[start[1]] === this.board[end[1]]) {
      let len = 0;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[start[0] + i][start[1]] === null) {
          len++;
        }
      }

      if (len === ship.length) {
        for (let i = 0; i < ship.length; i++) {
          this.board[start[0] + i][start[1]] = ship;
        }
      } else {
        throw new Error("Can't place ship!");
      }
    } else {
      throw new Error("Can't place ship!");
    }
  }
}

function randomMap(board) {
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
    const randomCoord = [randomNum(board.size), randomNum(board.size)];

    // const location = board.board;

    if (board.board[randomCoord[0]][randomCoord[1]] === null) {
      const emptySpaces = tryAllDirections(
        ['right', 'left', 'up', 'down'],
        randomCoord,
        currentShip,
      );

      if (emptySpaces) {
        for (const index of emptySpaces) {
          board.board[index[0]][index[1]] = new Ship(currentShip.length);
        }
      }
    } else {
      tryPlacing(currentShip);
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

    const isEmpty = (coords) => board.board[coords[0]][coords[1]] === null;

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

  function randomNum(limit) {
    return Math.floor(Math.random() * limit);
  }
}

export { Gameboard, randomMap };
