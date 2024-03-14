export default class Ship {
  constructor(length) {
    this.length = length;
    this.health = length;
    this.isSunk = false;
  }

  hit() {
    this.health--;

    if (this.health === 0) return this.sink();
  }

  sink() {
    this.isSunk = true;
  }
}
