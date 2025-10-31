function countPairs(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left; // all pairs between left and right are valid
      left++;
    } else {
      right--;
    }
  }

  return count;
}