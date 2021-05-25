// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['3 16'];

input = input[0].split(' ');
const minCount = parseInt(input.shift());
const maxCount = parseInt(input.shift());

answer = [];
for (let i = minCount; i <= maxCount; i ++) {
  if (i === 1) continue;
  if (checkPrime(i) || i === 2) answer.push(i);
}

console.log(answer.join('\n'));

function checkPrime(value) {
  const count = parseInt(value**(1/2));
  for (let i = 2; i <= count; i++) {
    if (value % i === 0) return false;
  }
  return true;
}
