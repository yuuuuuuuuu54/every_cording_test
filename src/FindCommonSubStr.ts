export const FindCommonSubStr = (str1: string, str2: string) => {
  const length1 = str1.length;
  const length2 = str2.length;

  // dp[][] 配列では最長共通文字列を保持する。
  const dp = Array.from({ length: length1 + 1 }, () =>
    Array(length2 + 1).fill(""),
  );

  for (let i = 1; i < length1 + 1; i++) {
    for (let j = 1; j < length2 + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }
  return dp[length1][length2];
};
