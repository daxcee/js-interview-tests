/**
 * Test: return the factorial of a number. Accept string or numbers
 * @function factorial
 * @param {string, number} n - numerical value to factorialize
 * @returns {number}
 */
function factorial(n) {
  const formula = x => {
    if (x < 0) throw new Error('Invalid value: number must be non-negative');
    if (x < 2) return 1;

    let count = x - 1;
    let result = x;
    while(count > 0) {
      result *= count;
      count -= 1;
    }

    return result;
  };

  if (typeof n === 'string') {
    if (Number.isNaN(+n)) throw new Error('Invalid value: string must be a numerical value');
    return formula(+n);
  } else if (typeof n === 'number') {
    return formula(n);
  } else {
    throw new Error('Invalid type: must be string or number');
  }
}

module.exports = factorial;