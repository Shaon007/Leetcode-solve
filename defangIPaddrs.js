function defangIPaddr(address) {
  let a = address.replaceAll('.', '[.]');
  return a;
}
console.log(defangIPaddr('1.1.1.1'));