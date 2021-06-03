// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`10
1 1 2 3 5 8 13 21 34 55`].toString().trim().split('\n');

const sol = (input) => {
  let [count, p] = [...input];
  pi = p.split(' ');
  pi = pi.map(e => parseInt(e));
  pi.unshift(0);
  let [d] = [[...pi]];
  for (let i=1; i <= count; i++) {
    for (let j=1; j<=i; j++) {
      d[i] = Math.min(d[i], d[i-j] + pi[j]);
    }
  }
  return d[count];
}

console.log(sol(input));