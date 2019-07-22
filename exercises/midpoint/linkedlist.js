class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  insertAt(data, pos) {
    if (!this.head || pos === 0) {
      this.insertFirst(data);
      return;
    }

    const prev = this.getAt(pos - 1);
    if (prev) {
      prev.next = new Node(data, prev.next);
    } else {
      this.insertLast(data);
    }
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let last = null;

    while (node) {
      last = node;
      node = node.next;
    }

    return last;
  }

  getAt(pos) {
    let node = this.head;
    let count = 0;

    while (node) {
      if (count === pos) return node;
      node = node.next;
      count++;
    }

    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let prev = this.head;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  removeAt(pos) {
    if (!this.head) return;

    if (pos === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(pos - 1);
    if (prev && prev.next) {
      prev.next = prev.next.next;
    }
  }

  forEach(fn) {
    if (!this.head) return;

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
