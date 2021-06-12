// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`].toString().trim().split('\n');


const sol = (input) => {
	const t = +input.shift();
	ans = [];
	for (let i = 0; i < t; i++) {
		let sticker = [];
		for (let j = 0; j<2; j++) {
			target = input.pop().split(' ').map(e=>+e);
			sticker.push(target);
		}
		sticker = sticker.reverse();
		const n = +input.pop();

		d = [];
		for (let j=0; j<n; j++) {
			d.push(new Array(3).fill(0));
		}

		d[0][1] = sticker[0][0];
		d[0][2] = sticker[1][0];
		for (let j=1; j<n; j++) {
			d[j][0] = Math.max(d[j-1][0], d[j-1][1], d[j-1][2]);
			d[j][1] = Math.max(sticker[0][j] + d[j-1][0], sticker[0][j] + d[j-1][2]);
			d[j][2] = Math.max(sticker[1][j] + d[j-1][0], sticker[1][j] + d[j-1][1]);
		}
		ans.push(Math.max(...d[n-1]));
	}
	return ans;
}

console.log(sol(input).reverse().join('\n'));