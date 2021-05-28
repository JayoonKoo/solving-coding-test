// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['314'];

input = input[0];

const sol = (input) => {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    let bin = parseInt(input[i], 8).toString(2);
    if (i != 0) {
      if (bin.length != 3) {
        bin = bin.length === 2 ? "0" + bin : "00" + bin;
      }
    }
    answer.push(bin);
  }
  return answer;
}

console.log(sol(input).join(''));