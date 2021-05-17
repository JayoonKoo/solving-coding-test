
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = ['abcd', '3', 'P x', 'L', 'P y'];
// const input = ['abc', '9', 'L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'];
// const input = ['dmih', '11', 'B', 'B', 'P x', 'L', 'B', 'B', 'B', 'P y', 'D', 'D', 'P z'];

const inputString = input[0];

let left = [];
let right = [];

for (i = 0; i < inputString.length; i++) {
  left.push(inputString[i]);
}

for (i = 2; i < input.length; i++) {
  
  let commands = input[i].split(' ');
  if (commands[0] == 'L') {
    if (left.length) {
      right.push(left.pop());
    }
  } else if (commands[0] == 'D') {
    if (right.length) {
      left.push(right.pop());
    }
  } else if (commands[0] == 'B') {
    if (left.length) {
      left.pop();
    }
  } else {
    left.push(commands[1]);
  }
}

while (right.length){
  left.push(right.pop());
}
console.log(left.join(""));
