// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['9'];

n = +input[0];
const sol = (n) => {
  d = [1, 1];
  for (let i=2; i<=n; i++) {
    d[i] = d[i-1] + d[i-2];
    d[i] %= 10007;
  }
  return d[n];
}

console.log(sol(n));