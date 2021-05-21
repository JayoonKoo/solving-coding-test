const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// let input = ['7', '1 1 2 3 4 2 1'];
const count = parseInt(input.shift());
input = input[0].split(' ').map(x => parseInt(x))

function countNumver () {
  let countObj = {};
  for (let i = 0; i < count; i ++) {
    let target = input[i];
    if (target in countObj) {
      countObj[target] += 1;
    } else {
      countObj[target] = 1;
    }
  }
  return countObj;
}

function setInput (countObj) {
  let settingInput = [];
  for (let i = 0; i < count; i ++) {
    let target = input[i];
    settingInput.push(countObj[target]);
  }
  return settingInput;
}

function sol (newInput, input) {
  let stack = []
  for(let i = 0;i < count;i++){
    while(stack.length !== 0 && newInput[stack[stack.length - 1]] < newInput[i]){
      newInput[stack.pop()] = input[i];
    }
    stack.push(i);
  }

  while(stack.length > 0){
    newInput[stack.pop()] = -1
  }
  return newInput;
}

countObj = countNumver();
newInput = setInput(countObj);
answer = sol(newInput, input);
console.log(answer.join(' '));
