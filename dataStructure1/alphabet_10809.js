// const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = ['baekjoon'][0];

function sol (input) {
  let ansArray = new Array(26).fill(-1);
  for (let i = 0; i < input.length; i ++) {
    let index = input[i].charCodeAt([0]) - 97;
    if (ansArray[index] === -1) {
      ansArray[index] = i;
    } else {
      continue
    }
  }
  return ansArray;
}

console.log(sol(input).join(' '));
