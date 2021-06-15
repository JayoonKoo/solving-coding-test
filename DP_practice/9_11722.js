// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`6
10 30 10 20 20 10`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	const A = input[1].split(' ').map(e=>+e);

	d = [1];
	for (let i=1; i<N; i++) {
		d[i] = 1;
		for (let j=0; j<i; j++) {
			if (A[i] < A[j] && d[i] < d[j] + 1) {
				d[i] = d[j] + 1;
			}
		}
	}
	return d;
}

console.log(Math.max(...sol(input)));
