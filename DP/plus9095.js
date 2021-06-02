// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
4
7
10`].toString().trim().split('\n');

const sol = (input) => {
  input.shift();
  answer = [];
  for (let num of input) {
    answer.push(calcPlus(num));
  }
  return answer;
}

console.log(sol(input).join('\n'));

function calcPlus(num) {
  d = [1, 1, 2];
  for (let i=3; i<=num; i++) {
    d[i] = d[i-1] + d[i-2] + d[i-3];
  }
  return d[num];
}