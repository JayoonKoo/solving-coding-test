// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['10'];

input = parseInt(input.shift());
console.log(factorial(input));

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num -1);
}
