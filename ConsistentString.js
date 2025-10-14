function countConsistentStrings(allowed, words) {
  let count = 0;
  for (i = 0; i < words.length; i++){
    let word = words[i];
    isConsistent = true;
    for (j = 0; j < word.length; j++){
      if (!allowed.includes(word[j])) {
        isConsistent = false
        break;
      }
    }
    if (isConsistent) count++
  }
  return count;
}
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));