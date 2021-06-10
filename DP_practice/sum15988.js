// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
4
7
10`].toString().trim().split('\n');

const count = +input.shift();
const mod = 1000000009;
maxN = Math.max(...input);

d = [1, 1, 2];
for (let i = 3; i<=+maxN; i++) {
  d[i] = (d[i-1] + d[i-2] +d[i-3])%mod;
}


ans = "";
for (let N of input) {
  ans += `${d[+N]%mod}\n`
}
console.log(ans);

