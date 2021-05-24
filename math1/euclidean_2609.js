// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['24 18'];

function makeInput(input) {
  input = input[0].split(' ');
  input = input.map(e=> parseInt(e));
  const a = Math.max(input[0], input[1]);
  const b = Math.min(input[0], input[1]);
  return [a, b];
}

function gcd(a, b) {
  let newB = a % b;
  let newA = b;
  if (newB === 0) {
    return newA;
  }
  return gcd(newA, newB);
}

function lcm(a, b, gcdValue) {
  return (a / gcdValue) * (b / gcdValue) * gcdValue;
}

input = makeInput(input);
answer = [];
const gcdValue = gcd(input[0], input[1])
answer.push(gcdValue);
answer.push(lcm(input[0], input[1], gcdValue));
console.log(answer.join('\n'));
