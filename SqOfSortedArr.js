function sortedSquares(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++){
    let sq = nums[i] * nums[i];
    result.push(sq);
  }
  return result.sort((a, b) => a - b)
}

console.log(sortedSquares([-4,-1,0,3,10]));