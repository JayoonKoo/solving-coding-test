// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`6
10 20 10 30 20 50`].toString().trim().split('\n');

const n = +input[0];
const a = input[1].split(' ').map(e=>+e);

let d = new Array(n).fill(0);
let v = new Array(n).fill(-1);

for (let i=0; i<n; i++) {
  d[i] = 1;
  for (j=0; j<i; j++) {
    if (a[j] < a[i] && d[j] + 1 > d[i]) {
      d[i] = d[j] +1;
      v[i] = j;
    }
  }
}

ans = Math.max(...d);

for (let i=0; i<n; i++) {
  if (d[i] === ans) {
    p = i;
  }
}

answer = ``;
const go = (p) => {
  if (p === -1) {
    return
  }
  go(v[p]);
  answer += `${a[p]} `;
}
go(p);
console.log(String(ans));
console.log(answer);