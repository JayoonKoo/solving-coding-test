// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['60466175 36'];

const sol = (input) => {
  input = input[0].split(' ');
  n = +input[0];
  t = +input[1];
  answer = n.toString(t).toUpperCase();
  return answer;
}

console.log(sol(input));
