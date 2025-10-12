function convertTemperature(celcius) {
  let result = [];
  let Farhenheit = celcius * 1.80 + 32.00;
  let Kelvin = celcius + 273.15;
  result.push(Kelvin,Farhenheit)
  return result;
}
console.log(convertTemperature(36.50));