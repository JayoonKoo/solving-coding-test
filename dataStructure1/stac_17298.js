// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['4', '9 5 4 8'];
const count = Number(input[0]);
const inputArray = input[1].split(' ');

class Node {
  constructor (value){
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class Deque {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  concatFrontNode (rightQueue) {
    this.tail.next = rightQueue.head;
    this.tail = rightQueue.tail;
    this.size += rightQueue.size;
  }

  pushFront(value) {
    const node = new Node(value);
    const tempHead = this.head;
    this.head = node;
    if (this.size === 0) {
      this.tail = node;
    } else {
      this.head.next = tempHead;
      tempHead.pre = this.head;
    }
    this.size += 1;
  }

  pushBack(value) {
    const node = new Node(value);
    const tempTail = this.tail;
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    } 
    this.tail = node;
    this.tail.pre = tempTail;
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
      this.head.pre = null;
    }
    return value;
  }

  popBack() {
    if (this.size === 0) {
      return -1;
    }
    const value = this.tail.value;
    this.size -=1;
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
for (let num of inputArray) {
  inputDeque.pushBack(num);
}

let answer = "";
for (i = 0; i < count; i++) {
  let isAdded = false;
  const target = inputDeque.popFront();
  if (inputDeque.size === 0) {
    answer += '-1';
    continue;
  } else {
    let tempQueue = new Deque();
    while(inputDeque.size != 0) {
      const num = inputDeque.popFront();
      tempQueue.pushBack(num);
      if (target < num) {
        answer += `${num} `;
        isAdded = true;
        break;
      }
    }
    while(tempQueue.size != 0) {
      inputDeque.pushFront(tempQueue.popBack());
    }
  }
  if (!isAdded) {
    answer += '-1 ';
  }
}
console.log(answer);


