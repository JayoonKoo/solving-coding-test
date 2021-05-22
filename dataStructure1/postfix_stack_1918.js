// const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = ['I*(A*(B+C)+D*(E+F)+G))+H'][0];
let newInput = '(' + input + ')';

const priority = {
  "+": 1,
  "-": 1, 
  "*": 2,
  "/": 2
}

function sol (newInput, priority) {
  let stack = [];
  let ans = "";
  const re = /[A-Z]/g;
  for (let c of newInput) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      while (stack.length != 0) {
        let temp = stack.pop();
        if (temp === '(') break;
        ans += temp;
      }
    } else if (c.match(re)) {
      ans += c;
    } else {
      while(stack[stack.length -1] != '(' && priority[c] <= priority[stack[stack.length -1]]) {
        ans += stack.pop();
      }
      stack.push(c);
    }
  }
  return ans;
}

console.log(sol(newInput, priority));
