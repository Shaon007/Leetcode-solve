function transformArray(nums) {
  let parity = [];
  for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0) {
      parity.push(0)
    }
    else parity.push(1)
  }
  return parity.sort((a, b) => a - b);
}
console.log(transformArray([4,5,2,1]));