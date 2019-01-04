/**
 * Test: swap two numbers without using a temp variable
 * @param {number} a - number value
 * @param {number} b - number value
 * @returns {array} - numbers swapped
 */
function swapNumber(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') throw new Error('Invalid numbers');

  // ES6 solution
  return [a, b] = [b, a];

  // non-ES6 solution
  // b = b - a;
  // a = a + b;
  // b = a - b;

  // return [a, b];
}

module.exports = swapNumber;