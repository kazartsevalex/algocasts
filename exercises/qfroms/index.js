// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(n) {
    this.stack1.push(n);
  }

  remove() {
    this.a_to_b('stack1', 'stack2');
    const res = this.stack2.pop();
    this.a_to_b('stack2', 'stack1');

    return res;
  }

  peek() {
    this.a_to_b('stack1', 'stack2');
    const res = this.stack2.peek();
    this.a_to_b('stack2', 'stack1');

    return res;
  }

  a_to_b(a, b) {
    while (this[a].peek()) {
      this[b].push(this[a].pop());
    }
  }
}

module.exports = Queue;
