// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
26 40 83
49 60 57
13 89 99`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	initInput = input[1].split(' ').map(e=>+e);
	d = [];
	dRev = [];
	for (let i =0; i<=N; i++) {
		d.push(new Array(3).fill(0));
		dRev.push(new Array(3).fill(0));
	}
	d[1] = initInput;
	dRev[N] = input[N].split(' ').map(e=>+e);

	lastMinIndx = dRev[N].indexOf(Math.min(...dRev[N]));
	firstMinIndex = initInput.indexOf(Math.min(...initInput));

	for (let i = 2; i<=N; i++) {
		target = input[i].split(' ').map(e=>+e);
		d[i][0] = target[0] + Math.min(d[i-1][1], d[i-1][2]);
		d[i][1] = target[1] + Math.min(d[i-1][0], d[i-1][2]);
		d[i][2] = target[2] + Math.min(d[i-1][1], d[i-1][0]);
	}

	for (let i = N-1; i>=1; i--) {
		target = input[i].split(' ').map(e=>+e);
		dRev[i][0] = target[0] + Math.min(dRev[i+1][1], dRev[i+1][2]);
		dRev[i][1] = target[1] + Math.min(dRev[i+1][0], dRev[i+1][2]);
		dRev[i][2] = target[2] + Math.min(dRev[i+1][1], dRev[i+1][0]);
	}

	indexArr = [0, 1, 2];
	targetIndx = indexArr.filter(e=> e !== firstMinIndex);
	lastTargetIndex = indexArr.filter(e=> e!== lastMinIndx);

	ansArr = [];
	ansTargeArr = [];
	targetIndx.forEach(i => ansTargeArr.push(d[N][i]));
	ansArr.push(Math.min(...ansTargeArr));

	ansTargeArr = [];
	lastTargetIndex.forEach(i => ansTargeArr.push(dRev[1][i]));
	ansArr.push(Math.min(...ansTargeArr));
	
	return Math.min(...ansArr);
}

console.log(sol(input));

