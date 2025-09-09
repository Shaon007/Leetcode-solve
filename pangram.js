function checkIfPangram(sentence) {
  sentence = sentence.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(checkIfPangram("The quick brown fox jumps over the lazy dog"));
console.log(checkIfPangram("leetcode"));