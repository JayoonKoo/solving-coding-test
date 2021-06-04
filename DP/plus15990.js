// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
4
7
10`].toString().trim().split('\n');

mod = 1000000009;

const table = () => {
  limit = 100000;
  d = [];
  for (let i=0; i<limit+1; i++) {
    let arr = [0,0,0,0];
    d.push(arr);
  }
  for (let i=1; i<limit + 1; i++) {
    if (i-1>=0) {
      d[i][1] = d[i-1][2] + d[i-1][3];
      if (i==1) {
        d[i][1] = 1;
      }
    }
    if (i-2 >= 0){
      d[i][2] = d[i-2][1] + d[i-2][3];
      if (i==2) {
        d[i][2] = 1;
      }
    }
    if (i-3 >= 0) {
      d[i][3] = d[i-3][1] + d[i-3][2];
      if(i ==3) {
        d[i][3] = 1;
      }
    }
    d[i][1] %= mod;
    d[i][2] %= mod;
    d[i][3] %= mod;
  }
  return d;
}

d = table();

const sol = (d, input) => {
  input.shift();
  answer = [];

  for (let num of input) {
    answer.push((d[num][1] + d[num][2] + d[num][3]) % mod);
  }
  return answer;
}

console.log(sol(d, input).join('\n'));