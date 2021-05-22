// const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = ['baekjoon'][0];

function sol (input) {
  let ansArray = new Array(26).fill(0);
  for (let c of input) {
    let index = c.charCodeAt([0]) - 97;
    ansArray[index] += 1;
  }
  return ansArray;
}

console.log(sol(input).join(' '));