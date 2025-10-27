function reverseDegree(s) {
  let reverseMap = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let value = 26;

  for (let i = 0; i < alphabet.length; i++) {
    reverseMap[alphabet[i]] = value;
    value--;
  }

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    sum += reverseMap[char] * (i + 1);
  }

  return sum;
}

console.log(reverseDegree("abc"));
