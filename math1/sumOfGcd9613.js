const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
4 10 20 30 40
3 7 5 12
3 125 15 25`
).split('\n');


let answer = [];
for (let i = 1; i < input.length; i++) {
  const newInput = input[i].split(' ');
  let sum = 0;
  for (let j = 1; j < newInput.length; j++) {
    let targetA = parseInt(newInput[j]);
    for (let k = j + 1; k < newInput.length; k++) {
      let targetB = parseInt(newInput[k]);
      sum += gcd(Math.max(targetA, targetB), Math.min(targetA, targetB));
    }
  }
  answer.push(sum);
}
console.log(answer.join('\n'));

function gcd(a, b) {
  const newB = a % b;
  const newA = b;
  if (newB === 0) {
    return newA;
  }
  return gcd(newA, newB);
}
