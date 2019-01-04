/**
 * verify a prime number
 * @function isPrime
 * @param {number}
 * @returns {boolean}
 */
function isPrime(n) {
  if (typeof n !== 'number') throw new Error('Must be a valid number');
  if (n === 2 || n === 3) return true;
  if (n < 2) return false;

  let divisor = 2;
  const limit = Math.sqrt(n);

  while ( limit >= divisor) {
    if (n % divisor === 0) return false;
    divisor += 2;
  }

  return true;
}

module.exports = isPrime;
