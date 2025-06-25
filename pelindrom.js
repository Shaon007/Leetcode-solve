
function checkPal(b) {
  let a = b.toString().split('').reverse().join('')
  if (a === b.toString()){
    return true
  }
  else {
    return false
  }
}