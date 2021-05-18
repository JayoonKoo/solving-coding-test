// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const N = parseInt(input[0]);
const input = ['15', 'push_back 1', 'push_front 2', 'front', 'back', 'size', 'empty', 'pop_front', 'pop_back', 'pop_front', 'size', 'empty', 'pop_back', 'push_front 3', 'empty', 'front']


class Node {
  constructor(value) {
    this.pre = null;
    this.next = null;
    this.value = value;
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

  isEmpty() {
    return this.size === 0;
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
    this.tail = this.tail.pre;
    this.size -= 1;
    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail.next = null;
    }
    return value;
  }

  front() {
    if (this.size === 0) {
      return -1;
    }
    return this.head.value;
  }

  back() {
    if (this.size === 0) {
      return -1;
    }
    return this.tail.value;
  }
}

let dequeue = new Deque();

answer = '';

for (i = 1; i < input.length; i++) {
  let command = input[i].split(' ');
  if (command[0] === 'push_front') {
    dequeue.pushFront(command[1]);
  } else if (command[0] === 'push_back') {
    dequeue.pushBack(command[1]);
  } else if (command[0] === 'pop_front') {
    answer += dequeue.popFront() + '\n';
  } else if (command[0] === 'pop_back'){
    answer += dequeue.popBack() + '\n';
  } else if (command[0] === 'size') {
    answer += dequeue.size + '\n';
  } else if (command[0] === 'empty') {
      if (dequeue.isEmpty()) {
        answer += 1 + '\n';
      } else {
        answer += 0 + '\n';
      }
  } else if (command[0] === 'front') {
    answer += dequeue.front() + '\n';
  } else if (command[0] === 'back') {
    answer += dequeue.back() + '\n';
  }
}
console.log(answer);
