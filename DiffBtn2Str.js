function findPermutationDifference(s, t) {
  const indexMap = {};
  for (let i = 0; i < s.length; i++) {
    indexMap[s[i]] = i;
  }

  let totalDiff = 0;
  for (let i = 0; i < t.length; i++) {
    totalDiff += Math.abs(i - indexMap[t[i]]);
  }

  return totalDiff;
}
