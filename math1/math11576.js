// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;
let input = ['17 8', '2', '2 16'];

const sol = (input) => {
  t = input.shift().split(' ');
  before = t[0];
  after = t[1];

  count = input.shift();
  input = input[0].split(' ');
  
  target = 0;
  for (let i = 1; i <= count; i++) {
    target += input[i-1] * before**(count - i);
  }
  answer = target.toString(after);
  return answer;
}

console.log(sol(input).split('').join(' '));