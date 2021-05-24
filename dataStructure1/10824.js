// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['10 20 30 40'];

function sol (input) {
  input = input[0].split(' ');
  let left = '';
  let right = '';
  for (let i = 0; i < 4; i ++) {
    if (i > 1) {
      left += input[i];
    } else {
      right += input[i];
    }
  }
  const answer = parseInt(left) + parseInt(right);
  return answer;
}

console.log(sol(input));
