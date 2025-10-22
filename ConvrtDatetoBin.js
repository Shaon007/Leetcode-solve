function convertDateToBinary(date) {
  let [year, month, day] = date.split('-');

  let binYear = parseInt(year).toString(2);
  let binMonth = parseInt(month).toString(2);
  let binDay = parseInt(day).toString(2);
  let binDate = [binYear,binMonth,binDay];
  return binDate.join('-');
}

console.log(convertDateToBinary("2080-02-29"));