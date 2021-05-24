// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['baekjoon'];

function sol (input) {
  input = input[0];
  let answer = [];
  for (let i = 0; i < input.length; i ++) {
    // substring 도 가능
    let string = input.slice(i);
    answer.push(string);
  }
  return answer.sort();
}

function makeResult (answer) {
  let result = '';
  for (let str of answer) {
    result += str + '\n';
  }
  // answer.join('\n').trim(); 도 가능
  return result;
}

let answer = sol(input);
console.log(makeResult(answer));
