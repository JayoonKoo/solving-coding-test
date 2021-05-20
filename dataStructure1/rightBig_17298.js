// const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = ['4', '9 5 4 8'];
let num = parseInt(input.shift())
let stack = []
input = input[0].split(' ').map(x => parseInt(x))

function rightBig(){
  for(let i = 0;i < num;i++){
    while(stack.length !== 0 && input[stack[stack.length - 1]] < input[i]){
      input[stack.pop()] = input[i];
    }
    stack.push(i);
  }

  while(stack.length > 0){
      input[stack.pop()] = -1
  }
}

rightBig()

console.log(input.join(' '))
