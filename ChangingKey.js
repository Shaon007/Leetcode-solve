function countKeyChanges(s) {
  s = s.toLowerCase();
  let change = 0;
  for (let i = 1; i < s.length; i++){
    if (s[i] !== s[i - 1]) {
      change++;
    }
  }
  return change;
}

console.log(countKeyChanges("AaAaAaaA"));