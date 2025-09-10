function countDigits(num) {
  count = 0;
  for (let digits of num.toString()) {
    let digit = parseInt(digits);
    if (digit !== 0 && num % digit === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(countDigits(121));