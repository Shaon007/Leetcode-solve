function xorOperation(n, start) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < n; i ++){
    let val = start + 2 * i;
    result ^= val;
    arr.push(val);
  }
  return result;
}
console.log(xorOperation(5,0));