function subtractProductAndSum(n) {
  let digits = n.toString().split('');
  let product = 1;
  let sum = 0;
  for (let digit of digits) {
    product *= parseInt(digit);
    sum += parseInt(digit);
  }
  return product - sum;
}
console.log(subtractProductAndSum(4421));