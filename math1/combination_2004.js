// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['17 12'];
input = input[0].split(' ');
const n = parseInt(input.shift());
const m = parseInt(input.shift());

const getTwoFive = (n) => {
  let twoCount = 0;
  let fiveCount = 0;
  let twoDiv = 2;
  let fiveDiv = 5;

  while (n > fiveDiv) {
    twoCount += parseInt(n / twoDiv);
    
    twoDiv *= 2;
    if (twoDiv >= fiveDiv) {
      fiveCount += parseInt(n /fiveDiv);
      fiveDiv *= 5;
    }
  }
  return [twoCount, fiveCount];
};

console.log(getTwoFive(n));
