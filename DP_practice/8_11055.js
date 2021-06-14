let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	target = input[1].split(' ').map(e=>+e);
	d = [target[0]];
	if (N === 1) {
		return d[0];
	}
	for (let i=1; i<N; i++) {
		d[i] = target[i];
		for (let j=0; j<i; j++) {
			max = 0;
			if (target[i] > target[j] && d[i] < d[j]+target[i]) {
				d[i] = d[j]+target[i];
			}
		}
	}

	return Math.max(...d);
}

console.log(sol(input));