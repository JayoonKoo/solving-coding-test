// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`].toString().trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	d = [];
	for (let i=0; i<=N; i++) {
		d.push([]);
	}
	d[0][0] = 0;
	d[1][0] = +input[1];
	for (let i=2; i<=N; i++) {
		target = input[i].split(' ').map(e=>+e);
		for (j=0; j<i; j++) {
			if (j === 0) {
				d[i][0] = target[0] + d[i-1][0];
			} else if (j === i-1) {
				d[i][j] = target[j] + d[i-1][j-1];
			} else {
				d[i][j] = Math.max(d[i-1][j-1] + target[j], d[i-1][j] + target[j]);
			}
		}
	}

	return Math.max(...d[N]);
}

console.log(sol(input));
