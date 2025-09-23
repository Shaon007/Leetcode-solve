function PatyaStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
console.log(PatyaStrings("aaaV","aaaA"));