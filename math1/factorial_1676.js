// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['500'];

input = parseInt(input.shift());


const solution = (input) => {
  count = 0;
  div = 5;
  while (input > div) {
    count += parseInt(input / div);
    div *= 5;
  }
  return count;
}

console.log(solution(input));
