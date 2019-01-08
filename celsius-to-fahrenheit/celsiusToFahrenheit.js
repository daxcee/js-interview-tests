/**
 * Test: Convert celsius to fahrenheit. Accept string or numbers
 * @function celsiusToFahrenheit
 * @param {string, number} celsius - temperature in celsius
 * @returns {number} - returns fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  const formula = C => (C * (9/5)) + 32;

  if (typeof celsius === 'string') {
    if (Number.isNaN(+celsius)) throw new Error('Invalid value: Must be a numerical value');

    return formula(+celsius);
  } else if (typeof celsius === 'number') {
    return formula(celsius);
  } else {
    throw new Error('Invalid type: Must be a string or number')
  }
}

module.exports = celsiusToFahrenheit;