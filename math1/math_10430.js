// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['5 8 4'];

function sol (input) {
  input = input[0].split(' ');
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);

  const answer1 = (A + B) % C;
  const answer2 = ((A % C) + (B % C)) % C;
  const answer3 = (A * B) % C;
  const answer4 = ((A % C) * (B % C)) % C;
  return [answer1, answer2, answer3, answer4];
}

console.log(sol(input).join('\n'));

