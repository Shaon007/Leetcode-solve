function minimumOperations(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    }
    if (nums[i] % 3 == 1 && nums[i] != 1) {
      count++;
    }
    if ((nums[i] + 1) % 3 == 0 && nums[i] != 1) {
      count++;
    }
  }
  return count;
}
console.log(minimumOperations([8]));