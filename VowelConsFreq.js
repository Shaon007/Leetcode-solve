function maxFreqSum(s) {
  const vowels = 'aeiou';
  let vowelCount = {}, constantCount = {}
  for (let ch of s) {
    if (vowels.includes(ch)) {
      vowelCount[ch] = (vowelCount[ch] || 0) + 1
    }
    else constantCount[ch] = (constantCount[ch] || 0) + 1;
  }
  let maxVowel = Math.max(0, ...Object.values(vowelCount));
  let maxCons = Math.max(0, ...Object.values(constantCount));

  return maxVowel + maxCons;
}
console.log(maxFreqSum('successes'));