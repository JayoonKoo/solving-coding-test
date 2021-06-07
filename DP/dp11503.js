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
