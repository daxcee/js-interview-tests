const isPrime = require('./checkPrime');

describe('isPrime', () => {
  test('Should return boolean', () => {
    expect(typeof isPrime(1)).toBe('boolean');
    expect(typeof isPrime(3)).toBe('boolean');
  });

  test('Throw error on non-number', () => {
    expect(() => isPrime('string')).toThrow();
    expect(() => isPrime([1, 2, 3])).toThrow();
    expect(() => isPrime({a: 1, b: 2, c: 3})).toThrow();
  });

  test('1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('Negative values are not prime', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-3)).toBe(false);
  });

  test('0 is not prime', () => {
    expect(isPrime(0)).toBe(false);
  });

  test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('5 is prime', () => {
    expect(isPrime(5)).toBe(true);
  });
})