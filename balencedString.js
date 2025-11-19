function balancedStringSplit(s) {
  let count = 0;
  let balence = 0;
  for (let char of s) {
    if (char === 'R') {
      balence++;
    }
    else {
      balence--;
    }
    if (balence === 0) count++;
  }
  return count;
}
console.log(balancedStringSplit("RLRRLLRLRL"));