// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3
26 40 83
49 60 57
13 89 99`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	d = [];

	for (let i =0; i<=N; i++) {
		d.push(new Array(3).fill(0));
	}

	ansArr = [];

	for (let i = 0; i<3; i++) {
		d[1] = [10000, 10000, 10000];
		let A = input[1].split(' ').map(e=>+e);
		d[1][i] = A[i];
		
		for (let j=2; j<=N; j++) {
			A = input[j].split(' ').map(e=>+e);
			d[j][0] = Math.min(d[j-1][1], d[j-1][2]) + A[0];
			d[j][1] = Math.min(d[j-1][0], d[j-1][2]) + A[1];
			d[j][2] = Math.min(d[j-1][0], d[j-1][1]) + A[2];
		}

		target = d[N].filter((e,index) => index != i);
		ansArr.push(Math.min(...target));
	}

	return Math.min(...ansArr);
}

console.log(sol(input));

