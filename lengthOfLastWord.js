let sentence = "";
function lengthOfLastWord(sentence) {
  sentence = sentence.trimEnd().split(" ");
  let lastword = sentence[sentence.length - 1];
  return lastword.length;
}

sentence = "  Hello";
console.log(lengthOfLastWord(sentence));