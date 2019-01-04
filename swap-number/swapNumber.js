function swapNumber(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') throw new Error('Invalid numbers');

  return [a, b] = [b, a];
}

module.exports = swapNumber;