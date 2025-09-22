function Round(n, k, arr) {
  var count = 0
  if (k < 1 || k > n || n > 50) return 0;
  for (var i = 0; i < n; i++){
    if (arr[i] >= arr[k - 1] && arr[i] > 0) count++
  }
  return count;
}

console.log(Round(8, 5, [10, 9, 8, 7, 7, 7, 5, 5]));