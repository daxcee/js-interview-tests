const swapNumber = require('./swapNumber');

describe('Swap Numbers without Temp', () => {
  test('Throw error is non-numbers', () => {
    expect(() => swapNumber('string', 'string')).toThrow();
  });

  test('Return type array', () => {
    const result = swapNumber(1, 2);
    expect(Array.isArray(result)).toBe(true);
  });

  test('Return [1, 2]', () => {
    const result = swapNumber(1, 2);
    expect(result).toEqual([2, 1]);
  });
})