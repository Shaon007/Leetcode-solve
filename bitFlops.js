function minBitFlips(start, goal) {
  let diff = start ^ goal;

  let count = 0;
  while (diff > 0) {
    count += diff & 1; // check last bit
    diff >>= 1;        // right shift
  }
  return count;
}

console.log(minBitFlips(10, 7)); // Output: 3
