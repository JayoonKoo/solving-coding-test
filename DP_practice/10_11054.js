// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`10
1 5 2 1 4 3 4 5 2 1`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	const A = input[1].split(' ').map(e=>+e);

	d = [];
	dInv = [];

	if (N === 1) {
		return 1;
	}

	for (let i=0; i<N; i++) {
		d[i] = 1;
		for (let j=0; j<i; j++) {
			if (A[i] > A[j] && d[i] < d[j] +1) {
				d[i] = d[j] + 1;
			}
		}
	}

	for (let i=N-1; i >=0; i--) {
		dInv[i] = 1;
		for (let j=i; j<N; j++) {
			t = dInv[j] +1;
			if (A[i] > A[j] &&  dInv[i] < t) {
				dInv[i] = t;
			}
		}
	}

	ans = 0;
	for (let i=0; i<N; i++) {
		t = d[i] + dInv[i] -1;
		if (ans < t) {
			ans = t;
		}
	}

	return ans;
}

console.log(sol(input));

