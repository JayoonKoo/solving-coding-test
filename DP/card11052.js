// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`4
1 5 6 7`].toString().trim().split('\n');

const sol = (input) => {
  let [count, p] = [...input];
  a = p.split(' ' ).map(e=> parseInt(e));
  a.unshift(0);
  d = new Array(+count + 1).fill(0);
  for (let i=1; i<=count; i++) {
    for (let j=1; j<=i; j++) {
      d[i] = Math.max(d[i], d[i-j] + a[j]);
    }
  }
  return d[count];
}

console.log(sol(input));