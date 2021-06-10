// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
26 40 83
49 60 57
13 89 99`].toString().trim().split('\n');

const count = +input[0];

d =[];
for (let i = 0; i<=count; i++) {
  arr = new Array(3).fill(0);
  d.push(arr);
} 

for (let i = 1; i <=count; i++) {
  target = input[i].split(' ');
  d[i][0] = Math.min(d[i-1][1], d[i-1][2]) + Number(target[0]);
  d[i][1] = Math.min(d[i-1][0], d[i-1][2]) + Number(target[1]);
  d[i][2] = Math.min(d[i-1][0], d[i-1][1]) + Number(target[2]);
}

console.log(Math.min(...d[count]));