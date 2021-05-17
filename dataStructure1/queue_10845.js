// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = ['15', 'push 1', 'push 2', 'front', 'back', 'size', 'empty', 'pop', 'pop', 'pop', 'size', 'empty', 'pop', 'push 3', 'empty', 'front'];
// let inputArray = input.splice(1, input.length);

let result = [];

for (i = 1; i < input.length; i ++) {
  let commands = input[i].split(' ');
  let commnad = commands[0];
  if (commnad === 'push') {
    result.push(commands[1]);
  } else if (commnad === 'front') {
    if (result.length === 0) {
      console.log(-1);
    } else {
      console.log(result[0]);
    }
  } else if (commnad === 'pop') {
    if (result.length === 0) {
      console.log(-1);
    } else {
      console.log(result.shift());
    }
  } else if (commnad === 'size') {
    console.log(result.length);
  } else if (commnad === 'empty') {
    if (result.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (commnad === 'back') {
    if (result.length === 0) {
      console.log(-1);
    } else {
      console.log(result[result.length -1]);
    }
  }
}
// inputArray.forEach(e => {
//   let commands = e.split(' ');
// })
