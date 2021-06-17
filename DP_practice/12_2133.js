// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`4`].toString().trim().split('\n');


const sol = (input) => {
	const N = +input[0];
	d = [1];

	if (N === 1) {
		return 0;
	}

	for(let i = 1; i<=N; i++) {
		if (i % 2 === 1) {
			d[i] = 0;
		} else {
			d[i] = 3 * d[i-2];
			for (let j=i-4; j>=0; j-=2) {
				d[i] += d[j] * 2;
			}
		}
	}

	return d[N];
}

console.log(sol(input));

