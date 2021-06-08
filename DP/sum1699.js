// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`7`].toString().trim().split('\n');

const n = +input[0];
d = [];

for (let i=0; i<n+1; i++) {
  d[i] = i;
  for (let j=1; j*j <= i; j++) {
    if (d[i] > d[i-j*j] + 1) {
      d[i] = d[i-j*j] +1;
    }
  }
}

console.log(d[n]);
