// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['10'];


// stack 사이즈 초과 되는 듯
// x = parseInt(input[0]);
// let d = new Array(1000000).fill(0);
// const makeOne = (x) => {
//   if (x === 1) return 0;
//   if (d[x] > 0) return d[x];
//   d[x] = makeOne(x - 1) +1;
//   if (x % 2 === 0) {
//     temp = makeOne(x / 2) + 1;
//     if (d[x] > temp) d[x] = temp;
//   }
//   if (x % 3 === 0) {
//     temp = makeOne(x / 3) + 1;
//     if (d[x] > temp) d[x] = temp;
//   }
//   return d[x];
// }

// console.log(makeOne(x));
x = parseInt(input[0]);
let d = [];
d[0] = 0;
const makeOne = (x) => {
  d[1] = 0;
  for (let i = 2; i <=x; i++) {
    d[i] = d[i -1] + 1;
    if (i % 2 === 0 && d[i] > d[i/2] + 1) {
      d[i] = d[i/2] + 1;
    }
    if (i % 3 === 0 && d[i] > d[i/3] + 1) {
      d[i] = d[i/3] + 1;
    }
  }
  return d[x];
}

console.log(makeOne(x));