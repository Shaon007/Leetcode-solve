function subsetXORSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum |= sum ^ nums[i]
  }
  return sum * Math.pow(2, nums.length -1);
}
console.log(subsetXORSum([1,3]));