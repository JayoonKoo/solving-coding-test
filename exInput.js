// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['5', '6', '8', '10', '12', '100'];


// dp[i] = d[i-1]의 0 개수 + dp[i-1]의 전체 개수
const sol = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = dp[2] = BigInt(1);
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  console.log(String(dp[n]));
};
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
