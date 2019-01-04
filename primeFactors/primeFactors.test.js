const primeFactors = require('./primeFactors');

describe('primeFactors', () => {
  test('Throw an error param is not a number', () => {
    expect(() => primeFactors('string')).toThrow();
  });

  test('Return an array', () => {
    const isArray = Array.isArray(primeFactors(3));

    expect(isArray).toBe(true);
  });

  test('primeFactors(69) return [3, 23]', () => {
    const result = primeFactors(69);

    expect(result).toEqual([3, 23]);
  });

  test('primeFactors(2) should be empty', () => {
    const result = primeFactors(2);

    expect(result).toEqual([]);
  });

  test('primeFactors(100) should be [2, 2, 5, 5]', () => {
    const result = primeFactors(100);

    expect(result).toEqual([2, 2, 5, 5]);
  });
});