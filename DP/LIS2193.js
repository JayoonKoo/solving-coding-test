// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`6
10 20 10 30 20 50`].toString().trim().split('\n');

const N = +input.shift();
const A = input.shift().split(' ');
const sol = (N, A) => {
  let D = new Array(N).fill(0);
  D[0] = 1;
  for (let i=1; i<N; i++) {
    for (let j=0; j<i; j++) {
      if (+A[i] > +A[j] && D[i] < D[j]) {
        D[i] = D[j];
      }
    }
    D[i] += 1;
  }
  return D;
}
let D = sol(N, A);

console.log(Math.max(...D));