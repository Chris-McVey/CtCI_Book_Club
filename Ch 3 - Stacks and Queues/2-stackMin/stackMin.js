//How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? push, pop and min should all operate in 0(1) time.

var Stack = require('./../util/Stack');

const Node = function (value, min) {
  this.value = value;
  this.min = min;
}

class StackMin extends Stack {
  constructor() {
    super();
    this.min = Infinity;

  }

  push(value) {
    let newNode = new Node(value, this.min);
    if (value < this.min) {
      this.min = value;
    }
    this._data.push(newNode);
  }

  pop() {
    let poppedNode = this._data.pop();
    this.min = poppedNode.min;
  }

  min() {
    return this.min;
  }
}

module.exports = StackMin;
