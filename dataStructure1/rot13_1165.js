// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = ['One is 1'];
input = input[0].split(' ');

function sol (input) {
  re = /[A-Za-z]/g;
  ans = '';
  i = 0;
  for (let str of input) {
    for (let c of str) {
      if (c.match(re)) {
        let ascii = c.charCodeAt([0]) + 13;
        if ((ascii > 90 && ascii < 104) || (ascii > 122 && ascii <136)) {
          ascii -= 26;
        }
        let strFromCode = String.fromCharCode(ascii);
        ans += strFromCode;
      } else {
        ans += c;
      }
    }
    i += 1;
    if (i != input.length) {
      ans += ' ';
    }
  }
  return ans;
}

console.log(sol(input));
