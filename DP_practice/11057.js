// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`2`].toString().trim().split('\n');

let n = +input[0];
const mod = 10007;

d = [];

for (let i=0; i<=n; i++) {
	d.push(new Array(10).fill(1));
}

for (let i=2; i<=n; i++) {
	for (let j=0; j<=9; j++) {
		t = 0;
		for (let k=0; k<=j; k++) {
			t += d[i-1][k];
		}
		d[i][j] = t % mod;
	}
}

answer = 0;
d[n].forEach(e=> answer+=e);

console.log(answer % mod);