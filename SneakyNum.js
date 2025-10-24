function getSneakyNumbers(nums) {
  let count = {};
  let repeat = [];
  nums.forEach(num => {
    count[num] = (count[num] || 0) + 1;
    if (count[num] == 2) {
      repeat.push(num);
    }
  });
  return repeat;
}
console.log(getSneakyNumbers([0,3,2,1,3,2]));