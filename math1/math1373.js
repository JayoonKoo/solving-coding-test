let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['11001100'];

const sol = (input) => {
  input = input[0];
  answer = ''
  for (let i = input.length; i > 0; i -= 3) {
    start = i -3;
    if (start < 0 ) {
      start = 0
    }
    let target = input.slice(start, i);
    answer += parseInt(target, 2).toString(8);
  }
  return answer;
}

console.log(sol(input).split("").reverse().join(""));
  