function findWordsContaining(words, x) {
  let word = [];
  for (let i = 0; i < words.length; i++){
    if (words[i].includes(x)) {
      word.push(i)
    }
  }
  return word;
}
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));