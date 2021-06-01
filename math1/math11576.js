// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;
let input = ['17 8', '2', '2 16'];

const sol = (input) => {
  const [A, B] = input[0].split(' ').map(Number);
  const M = Number(input[1]);
  const arr = input[2].split(' ').map(Number);
  const result = [];

  let temp = 0;
  for (let i = 0, e = M - 1; i < M; i++, e--) {
    temp += arr[i] * (A**e);
  }

  while (temp) {
    result.push(temp % B);
    temp = parseInt(temp / B);
  }
  return result;
}

console.log(sol(input).reverse().join(' '));
