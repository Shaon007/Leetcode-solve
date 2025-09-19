function arraySign(nums) {
  let product = 1;
  count = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === 0) return 0;
    if (nums[i] < 0) {
      count++;
    }
  }
  return count % 2 === 0 ? 1 : -1;
}
console.log(arraySign([1,5,0,2,-3]));