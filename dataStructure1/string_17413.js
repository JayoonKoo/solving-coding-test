
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
// const input = ['<open>tag<close>']
const input = ['<   space   >space space space<    spa   c e>'];
let inputString = input[0];


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(x) {
    const node = new Node(x);
    const tmpNode = this.head;
    this.head = node;
    if (this.size === 0) {
      this.tail = node;
    } else {
      this.head.next = tmpNode;
      tmpNode.pre = this.head;
    }
    this.size += 1;
  }

  pushBack(x) {
    const node = new Node(x);
    const tmpTail = this.tail;
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.tail.pre = tmpTail;
    this.size += 1;
  }

  popFront() {
    if (this.size === 0) {
      return -1;
    }
    const value = this.head.value;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return value;
  }

  popBack() {
    if (this.size === 0) {
      return -1;
    }
    const value = this.tail.value;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.pre;
      this.tail.next = null;
    }
    return value;
  }
}


let inputDeque = new Deque();
for (let c of inputString) {
  inputDeque.pushBack(c);
}
inputDeque.pushBack(' ');

let reverseQueue = new Deque();

answer = '';
while (inputDeque.size != 0) {
  let target = inputDeque.popFront();
  if (target === '<') {
    if (reverseQueue) {
      while (reverseQueue.size != 0) {
        answer += reverseQueue.popBack();
      }
    }
    answer += target;
    let nextTarget = inputDeque.popFront();
    while (nextTarget != '>') {
      answer += nextTarget;
      nextTarget = inputDeque.popFront();
    }
    answer += nextTarget;
  } else if (target === ' ') {
    while( reverseQueue.size != 0) {
      answer += reverseQueue.popBack();
    }
    answer += target;
  } else {
    reverseQueue.pushBack(target);
  }
}
console.log(answer);