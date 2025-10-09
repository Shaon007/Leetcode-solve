function buildArray(nums) {
  let arr1 = [];
  for (let i = 0; i < nums.length; i++){
    arr1.push(nums[nums[i]]);
  }
  return arr1
}
console.log(buildArray([0,2,1,5,3,4]));