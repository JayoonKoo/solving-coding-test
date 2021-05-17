let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = ['8', '4', '3', '6', '8', '7', '5', '2', '1']; 
// const input = ['5', '1', '2', '5', '3', '4'];
const count = Number(input[0]);

let stackNumber = 1;
let stack = [];
let result = [];
for (i = 1; i < count + 1; i++) {
  let target = Number(input[i])
  if (stackNumber <= target) {
    while (stackNumber <= target) {
      stack.push(stackNumber);
      console.log('+');
      if (stackNumber === target) {
        stack.pop();
        console.log('-');
      }
      stackNumber += 1;
    }
  } else {
    if (stack[stack.length -1] !== target) {
      console.log('NO');
      break;
    } else {
      stack.pop();
      console.log('-');
    }
  }
}
