// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`20 2`].toString().trim().split('\n');
input = input[0].split(' ');

const n = +input[0];
const k = +input[1];
const mod = BigInt(1000000000);

d = [];
for (let i = 0; i<k+1; i++) {
  zero = new Array(n+1).fill(BigInt(0));
  d.push(zero);
}

d[0][0] = BigInt(1);
for (let i = 1; i<=k; i++) {
  for (let j = 0; j<= n; j++) {
    for (let k = 0; k<=j ; k++) {
      d[i][j] += d[i-1][j-k];
      d[i][j] %= mod;
    }
  }
}

console.log(String(d[k][n] % mod));