// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`2`].toString().trim().split('\n');

function getTable() {
  table = [];
  for (let i=0; i<101; i++) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    table.push(arr);
  }
  return table;
}

table = getTable();

const sol = (table, input) => {
  mod = 1000000000;
  let n = +input.shift();
  for (let i=1; i<10; i++) {
    table[1][i] = 1;
  }
  for (let i=2; i<n+1; i++) {
    for (let j=0; j<10; j++) {
      if (j-1>=0) table[i][j] += table[i-1][j-1];
      if (j+1<=9) table[i][j] += table[i-1][j+1];

      table[i][j] %= mod;
    }
  }
  ans=0;
  table[n].forEach(num => ans += num);
  return ans%mod;
}

console.log(sol(table, input));