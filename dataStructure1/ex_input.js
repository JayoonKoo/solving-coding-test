let fs = require('fs');
let inputsd = fs.readFileSync('/dev/stdin').toString().split('\n');

// 한줄 입력일 경우
let input = inputsd[0];
// 여러줄일 깅우
let input = inputsd;

