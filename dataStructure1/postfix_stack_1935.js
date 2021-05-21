// const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = ['1','AA+A+','1'];
// let input = ['5', 'ABC*+DE/-', '1', '2', '3', '4', '5'];
const count = parseInt(input.shift());
const target = input.shift();



let re = /(\*|\+|\/|\-)/g;
let newTarget = target.split(re);

function result (t, a, b) {
  if (t === '*') {
    return a * b;
  } else if (t === '-') {
    return a - b;
  } else if (t === '+') {
    return a + b;
  } else {
    return a / b;
  }
}

function setResult (target) {
  let setInput = "";
  for (let t of target) {
    if (t !== '-' && t !== '*' && t !== '/' && t !== '+' && t !== '') {
      setInput += t;
    }
  }
  setInput = new Set(setInput);
  return setInput;
}

function link(setInput, input) {
  setInput = Array.from(setInput);
  output = {};
  let i = 0;
  for (let num of input) {
    output[setInput[i]] = num;
    i++;
  }
  return output;
}

function sol (target, linkOutput) {
  answer = 0;
  let stack = [];
  for (let t of target) {
    if (t === '-' || t === '*' || t === '/' || t === '+') {
      b = parseFloat(stack.pop());
      a = parseFloat(stack.pop());
      rs = result(t, a, b);
      stack.push(rs);
    } else {
      for ( let i=0; i<t.length; i++) {
        stack.push(linkOutput[t[i]]);
      }
    }
  }
  answer = stack.pop();
  return answer;
}

let setInput = setResult(newTarget);
let linkOutput = link(setInput, input);
answer = sol(newTarget, linkOutput);
console.log(answer.toFixed(2));

