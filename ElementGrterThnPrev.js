function countGreaterThanAverage(responseTimes) {
  let count = 0;
  for (let i = 1; i < responseTimes.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += responseTimes[j];
    }
    let avg = sum / i;
    if (responseTimes[i] > avg) {
      count++;
    }
  }

  return count;
}

let response = [100, 200, 150, 300];
console.log(countGreaterThanAverage(response));
