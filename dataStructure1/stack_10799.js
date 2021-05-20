
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const N = parseInt(input[0]);
const input = ['(((()(()()))(())()))(()())'][0]

const re = /(\(\))/g;

let result = 0;
// let targetSize = 0;
// const tmp = input[0].split(re);

let stack = [];
for (let i=0; i<input.length; i++) {
  if (input[i] === '(') {
    stack.push(input[i]);
  } else {
    stack.pop();
    if (input[i-1] === '(') {
      result += stack.length;
    } else {
      result += 1;
    }
  }
}

// for (let p of tmp) {
//   if (re.test(p)) {
//     answer += targetSize;
//   } else {
//     for (let c of p) {
//       if ( c === '(') {
//         targetSize += 1;
//       } else {
//         targetSize -= 1;
//         answer += 1;
//       }
//     }
//   } 
// }

console.log(result);
