// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['ZZZZZ 36'];

input = input[0].split(' ');
const sol = (input) => {
  n = input[0];
  t = input[1];
  answer = parseInt(n, t);
  return answer;
}

console.log(sol(input));