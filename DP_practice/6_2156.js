// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`6
6
10
13
9
8
1`].toString().trim().split('\n');

const sol = (input) => {
	const n = +input[0];
	d = [];
	for (let i=0; i<=n; i++) {
		d.push(new Array(2).fill(0));
	}
	d[1][1] = +input[1];
	if (n === 1) return d[1][1];
	d[2][0] = +input[1];
	d[2][1] = d[1][1] + Number(input[2]);

	for (let i = 3; i<=n; i++) {
		d[i][0] = Math.max(...d[i-1]);
		d[i][1] = Math.max(+input[i] + d[i-1][0], +input[i] + +input[i-1] + d[i-2][0]);
	}

	return Math.max(...d[n]);
}

console.log(sol(input));