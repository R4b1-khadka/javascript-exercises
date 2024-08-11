const convertToCelsius = function (temp) {
  celsiusScale = (5 / 9) * (temp - 32);
  let rounded = Math.round(celsiusScale * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (celsius) {
  FahrenheitScale = 1.8 * celsius + 32;
  let roundedUp = Math.round(FahrenheitScale * 10) / 10;
  return roundedUp;
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
// convertToFahrenheit
// convertToFahrenheit

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
