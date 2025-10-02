function maxProfit(prices) {
  let min = Infinity;
  let max = 0;
  for (let i = 0; i <= prices.length; i++){
    if (prices[i] < min) min = prices[i];
    let profit = prices[i] - min;
    if (profit > max) max = profit;

  }
  return max;
}

console.log(maxProfit([7, 6, 4, 3, 1]));