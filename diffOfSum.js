function differenceOfSums(n, m) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= n; i++){
    if (i % m === 0) {
      sum1 += i;
    }
    else {
      sum2 += i;
    }

  }
  return  sum2 - sum1;
}

console.log(differenceOfSums(5,6));