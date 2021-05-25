// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['5', '1 2 3 5 7'];

const count = parseInt(input.shift());
input = input[0].split(' ');
answer = 0;
for (let i = 0; i < count; i ++) {
  let target = parseInt(input[i]);
  if (target === 1) continue;
  if (checkPrime(target) || target === 2) answer += 1;
}

console.log(answer)

function checkPrime(target) {
  const count = parseInt(target**(1/2));
  
  for (let i = 2; i < count + 1; i ++) {
    if (target % i === 0) return false;
  }

  return true;
}
