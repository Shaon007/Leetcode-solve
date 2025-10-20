function findClosest(x, y, z) {
  if (Math.abs(z - x) > Math.abs(z - y)) return 2;
  if (Math.abs(z - x) < Math.abs(z - y)) return 1;
  else return 0;
}
console.log(findClosest(1,5,3));