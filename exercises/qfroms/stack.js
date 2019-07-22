class Stack {
  constructor() {
    this.data = [];
  }

  push(n) {
    this.data.unshift(n);
  }

  pop(n) {
    return this.data.shift(n);
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
