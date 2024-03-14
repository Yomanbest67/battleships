import Ship from './ship.js';

export default class Gameboard {
  constructor(size) {
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
        location.hit();
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

const gameBoard = new Gameboard(10);
const ship = new Ship(3);
const newShip = new Ship(2);

gameBoard.placeShip(ship, [0, 1], [0, 3]);

gameBoard.placeShip(newShip, [3, 1], [3, 2]);

gameBoard.receiveAttack(5, 3);

console.log(gameBoard.receiveAttack(0, 1));

console.table(gameBoard.board);
