function firstPalindrome(words) {
  for (let word of words) {
    let reverse = word.split('').reverse().join('');
    if (word === reverse) {
      return word;
    }
  }
  return "";
}
let words = ["def", "ghi"];
console.log(firstPalindrome(words));