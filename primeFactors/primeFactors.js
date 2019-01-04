/**
 * Test: Find the prime factors of a number
 * @function primeFactors
 * @param {number} n
 * @returns {array} factors - array of prime factors
 * Big-O is O(n)
 */
function primeFactors(n) {
  if (typeof n !== 'number') throw new Error('Invalid number');

  const factors = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor += 1;
    }
  }

  return factors;
}

module.exports = primeFactors;