// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['8', '20', '42', '0'];


answer = [];

for (let num of input) {
  let isGoldQuess = false;

  if (num == 0) break;

  num = parseInt(num);
  targetMinPrime = 3;

  while (!isGoldQuess) {
    targetMaxPrime = num - targetMinPrime;

    if (checkPrime(targetMaxPrime)) {
      answer.push(`${num} = ${targetMinPrime} + ${targetMaxPrime}`)
      isGoldQuess = true;
      targetMaxPrime = 3;
      continue;
    } else {
      targetMinPrime = getOddMinPrime(targetMinPrime);
    }

    if (targetMinPrime > targetMaxPrime) {
      answer.push = "Goldbach's conjecture is wrong.";
      break;
    }
  }
}
console.log(answer.join('\n'));


function getOddMinPrime(target) {
  for (let i = target + 2; i < 1000000; i +=2) {
    if (checkPrime(i)) return i;
  }
}


function checkPrime(value) {
  const count = parseInt(value**(1/2));
  for (let i = 2; i <= count ; i++) {
    if (value % i === 0) return false;
  }
  return true;
}


