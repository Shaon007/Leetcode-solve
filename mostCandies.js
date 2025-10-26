function kidsWithCandies(candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++){
    if (candies[i] > max) max = candies[i];
  }
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) result.push(true);
    else result.push(false);
  }
  return result;
}
console.log(kidsWithCandies([2, 8, 7],1));