function calPoints(operations) {
  let score = [];
  for (let i = 0; i < operations.length; i++){
    if (operations[i] === "+") {
      score.push(score[score.length - 1] + score[score.length - 2]);
    }
    else if (operations[i] === "D") {
      score.push(score[score.length -1]*2)
    }
    else if (operations[i] === "C") {
      score.pop();
    }
    else {
      score.push(parseInt(operations[i]));
    }
  }
  return score.reduce((a, b) => a + b, 0);
}
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));