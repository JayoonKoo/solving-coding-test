// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['14', 'push 1', 'push 2', 'top', 'size', 'empty', 'pop', 'pop', 'pop', 'size', 'empty', 'pop', 'push 3', 'empty', 'top'];
let stack = [];

counter = Number(input[0]);

for (i = 1; i < counter + 1; i++) {
  const comand = input[i].split(' ');
  if (comand.length == 1){
    // pop 일때 
    if (comand[0] === 'pop') {
      if (stack.length == 0) {
        console.log(-1)
      } else {
        console.log(stack.pop())
      }
    }

    // top 일때
    if (comand[0] === 'top') {
      if (stack.length == 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length -1])
      }
    }

    // empty 일때 
    if (comand[0] === 'empty') {
      if (stack.length == 0) {
        console.log(1)
      } else {
        console.log(0)
      }
    }

    // size 일때
    if (comand[0] === 'size') {
      console.log(stack.length)
    }
  } else {
    // push 일때
    x = comand[1];
    stack.push(x);
  }
  // console.log(comand[0]);
}
