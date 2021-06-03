// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
4
7
10`].toString().trim().split('\n');


const table = (input) => {
  mod = 1000000009;
  const count = +input.shift();
  limit = Math.max(...input);
  d = new Array(limit+1);
  console.log(d);
  for (let i=1; i<=limit; i++) {
    if (i-1 >= 0) {
      if (i === 1) {
        d[i][1] = 1;
      } else {
        d[i][1] = d[i-1][2] + d[i-1][3];
      }
    }
    if (i-2 >= 0) {
      if (i === 2) {
        d[i][2] = 1;
      } else {
        d[i][2] = d[i-2][1] + d[i-2][3];
      }
    }
    if (i-3 >= 0) {
      if (i === 3) {
        d[i][3] = 1;
      } else {
        d[i][3] = d[i-3][1] + d[i-3][2];
      }
    }
    d[i][1] %= mod;
    d[i][2] %= mod;
    d[i][3] %= mod;
  }
  return d;
}

d = table(input);

const sol = (d, input) => {
  answer = [];
  for (let num of input) {
    answer.push(d[num][1] + d[num][2] + d[num][3]);
  }
  return answer;
}

console.log(sol(d, input).join('\n'));