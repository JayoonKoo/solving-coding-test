// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['25 12'];
input = input[0].split(' ');
const n = parseInt(input.shift());
const m = parseInt(input.shift());

const getFiveCount = (n) => {
  let count = 0;
  let div = 5;
  while (n >= div) {
    count += parseInt(n / div);
    div *= 5;
  }
  return count;
};

const getTwoCount = (n) => {
  let count = 0;
  let div = 2;
  while (n >= div) {
    count += parseInt(n / div);
    div *= 2;
  }
  return count;
};

// a / (b + c)
let a = [getTwoCount(n), getFiveCount(n)];
let b = [getTwoCount(n - m), getFiveCount(n - m)];
let c = [getTwoCount(m), getFiveCount(m)];

let two = a[0] - (b[0] + c[0]);
let five = a[1] - (b[1] + c[1]);

console.log(Math.min(two, five));


