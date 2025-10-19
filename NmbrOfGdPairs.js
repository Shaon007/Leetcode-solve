function numIdenticalPairs(nums) {
  let pair = 0;
  for (let i = 0; i < nums.length; i++){
    for (let j = i+1; j <= nums.length; j++){
      if (nums[i] == nums[j]) pair++;
    }
  }
  return pair;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));