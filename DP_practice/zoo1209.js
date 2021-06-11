// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`4`].toString().trim().split('\n');

let n = +input[0];
const mod = 9901;

d = [];
for (let i=0; i<=n; i++) {
	arr = new Array(3).fill(1);
	d.push(arr);
}

for (let i = 2; i<=n; i++) {
	d[i][0] = (d[i-1][0] +d[i-1][1] + d[i-1][2]) % mod;
	d[i][1] = (d[i-1][0] +d[i-1][2]) % mod;
	d[i][2] = (d[i-1][0] +d[i-1][1]) % mod;

}

console.log((d[n][0] + d[n][1] + d[n][2]) % mod);