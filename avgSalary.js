function average(salary) {
  salary.sort((a, b) => a - b)
  let sum = 0
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i]
  }
  return Math.round((sum / (salary.length - 2)) * 1e5) / 1e5;
}
console.log(average([4000, 3000, 1000, 2000]));