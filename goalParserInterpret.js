function interpret(command) {
  let result = '';
  for (let i = 0; i < command.length; i++){
    if (command[i] === 'G') {
      result += 'G';
    }
    else if (command[i] === '(' && command[i + 1] === ')') result += 'o', i++;
    else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l') {
      result += 'al', i += 3;
    }

  }
  return result
}
console.log(interpret("G()(al)"));