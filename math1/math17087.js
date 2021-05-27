let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const sol = (input) => {
  const N = input[0].split(' ')[0];
  const S = input[0].split(' ')[1];
  let array = [];
  const placeInput = input[1].split(' ');

  for (let i = 0; i < N; i++) {
    array[i] = Math.abs(S - placeInput[i]);
  }

  num = array[0];
  for (i = 1; i < array.length; i++) {
    num = gcd(num, array[i]);
  }
  return num;
}

console.log(sol(input));

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
