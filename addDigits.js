function addDigits(num) {
  while (num >= 10) {
    let sum = 0
    if (num === 0) return 0
    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    num = sum
  }
  return num
}
// console.log(addDigits(65));
// console.log(addDigits(0));