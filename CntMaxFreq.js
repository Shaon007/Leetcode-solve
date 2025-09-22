function maxFrequencyElements(nums) {
  let freq = {};
  let maxFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxFreq) maxFreq = freq[num];
  }
  let total = 0;
  for (let num of nums) {
    if (freq[num] === maxFreq) total++;
  }

  return total;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); 
