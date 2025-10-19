function finalValueAfterOperations(operations) {
  let final = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == 'X++' || operations[i]=="++X") {
      final += 1;
    }
    if (operations[i] == 'X--' || operations[i]== "--X") {
      final -= 1;
    }
  }
  return final;
}
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));