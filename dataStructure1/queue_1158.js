// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const N = parseInt(input[0]);
const input = ['7 3']
const count = input[0].split(' ')[0];
const dequePoint = Number(input[0].split(' ')[1]);

class NodeQueue {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const nodeQueue = new NodeQueue(value);
    if (this.size === 0) {
      this.head = nodeQueue;
    } else {
      this.tail.next = nodeQueue;
    }
    console.log(this.tail)
    this.tail = nodeQueue;
    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    } 
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    if (this.size === 0) {
      this.tail == null;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

resultQueue = new Queue();
for (i = 0; i < count; i++) {
  resultQueue.enqueue(i + 1);
}

let j = 1;
let answer = '<';
while (resultQueue.size != 0) {
  let value = resultQueue.dequeue();
  if (j != dequePoint) {
    resultQueue.enqueue(value);
  } else {
    answer += value;
    if (resultQueue.size === 0) {
      answer += '>';
      continue;
    }
    answer += ", ";
    j = 0;
  }
  j += 1;
}

console.log(answer);
