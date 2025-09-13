var differenceOfSum = function (nums) {
  let sum = 0;
  let digitSum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
      let numArr=nums[i].toString()
      for (let j = 0; j < numArr.length; j++) {
          digitSum += Number(numArr[j])
      }
  }

 return Math.abs(sum-digitSum)

};