// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['5', '6', '8', '10', '12', '100'];

function solution() {
  const MAX = 1000000;
  const isPrime = [false, false];

  for (let i = 2; i <= MAX; i++) {
    isPrime[i] = true;
  }

  for (let i = 2; i<= MAX; i++) {
    for (let j = i * 2; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }

  result = [];
  input.shift();
  for (let N of input) {
    let count = 0;

    for (let i = 2; i <= N / 2; i++) {
      if (isPrime[i] && isPrime[N-i]) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(solution().join('\n'));