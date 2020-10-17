import moment from 'moment'

export function tempCelcius(n) {
  const kelvin = n;
  const celsius = kelvin - 273;
  const celsiusTemp = Math.floor(celsius);
  return celsiusTemp;
}

export function tempFahrenheit(n) {
  const kelvin = n;
  const celsius = kelvin - 273;
  let fahrenheit = celsius * (9 / 5) + 32;
  const fahrenheitTemp = Math.floor(fahrenheit);
  return fahrenheitTemp;
}

export function dateFormat(date) {
  let now = moment(date);
  const newDate = now.format("dddd, MMM Do");

  return newDate;
}
