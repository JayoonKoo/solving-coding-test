let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const a = input[1].split(' ').map(e=> +e);
let d = [a[0]];

for (let i=1; i<n; i++) {
  d[i] = Math.max(a[i], d[i-1] + a[i]);
}

console.log(Math.max(...d));
