function minOperations(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  let op = sum % k;
  return op;
}

console.log(minOperations([3, 9, 7], 5));
