// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`10
10 -4 3 1 5 6 -35 12 21 -1`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	const A = input[1].split(' ').map(e=>+e);
	
	if (N === 1) {
		return A[0];
	}

	d = [];
	dMinus = [];
	d = [A[0], Math.max(A[1], A[0] + A[1])];
	dMinus = [A[0], A[0]];

	for (let i=2; i<N; i++) {
		d[i] = Math.max(A[i], d[i-1] + A[i]);
		dMinus[i] = Math.max(dMinus[i-1] + A[i], d[i-2] + A[i]);
	}

	dMax = Math.max(...d);
	dMinusMax = Math.max(...dMinus);
	return Math.max(dMax, dMinusMax);
}

console.log(sol(input));

