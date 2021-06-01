// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;
let input = ['6'];

num = +input[0];

const sol = (num) => {
  result = '';
  for (let i = 2; i <= num; i ++) {
    while ( num % i === 0) {
      num = parseInt(num / i);
      result += `${i}\n`;
    }
  }
  return result;
}
console.log(sol(input));
