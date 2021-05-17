let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = ['3', '((', '))', '())(()'];
// const input = ['6', '(())())', '(((()())()', '(()())((()))', '((()()(()))(((())))()', '()()()()(()()())()', '(()((())()('];
const count = Number(input[0]);

function judge(ps) {
  let openCount = 0;
  let closeCount = 0;
  for (let i in ps) {
    let target = ps[i];
    if (openCount === 0 && target === ')') {
      return 'NO';
    } else {
      if (target === '(') {
        openCount += 1;
      } else {
        closeCount += 1;
      }
      if (openCount === closeCount) {
        openCount = 0;
        closeCount = 0;
      }
    }
  }
  if (openCount === closeCount) {
    return 'YES';
  } else {
    return 'NO';
  }
}

for (i = 1; i < count + 1; i++) {
  ps = input[i];
  let yesOrNo = judge(ps);
  console.log(yesOrNo);
}