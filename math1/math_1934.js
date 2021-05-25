// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['3', '1 45000', '6 10', '13 17'];

const count = parseInt(input.shift());

let answer = [];

for (i = 0; i < count; i ++) {
  let target = input[i];
  let newInput = getMinMax(target);
  let gcdValue = calcgcd(newInput[0], newInput[1]);
  let lcm = calcLcm(newInput, gcdValue);
  answer.push(lcm);
}

console.log(answer.join('\n'));

function getMinMax(target) {
  targetArray = target.split(' ');
  min = Math.min(targetArray[0], targetArray[1]);
  max = Math.max(targetArray[0], targetArray[1]);
  return [max, min];
}

function calcgcd(a, b) {
  let newB = a % b;
  let newA = b;
  if (newB === 0) {
    return newA;
  }
  return calcgcd(newA, newB);
}

function calcLcm(input, gcdValue) {
  return input[0] * input[1] / gcdValue;
}
