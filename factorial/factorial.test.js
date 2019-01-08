const factorial = require('./factorial');

describe('Factorial', () => {
  test('Throw error if type is non-string or non-number', () => {
    expect(() => factorial([1,2,3])).toThrow();
  });

  test('Throw an error if string is a non-numeric value', () => {
    expect(() => factorial('apples')).toThrow();
  });

  test('Throw an error when negative number', () => {
    expect(() => factorial(-10)).toThrow();
    expect(() => factorial('-10')).toThrow();
  });

  test('Expect a number returned', () => {
    expect(typeof factorial(5)).toBe('number');
    expect(typeof factorial('5')).toBe('number');
  });

  test('factorial(0) -> 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial('0')).toBe(1);
  });

  test('factorial(1) -> 1', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial('1')).toBe(1);
  });

  test('factorial(5) -> 120', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial('5')).toBe(120);
  });

  test('factorial(10) -> 3628800', () => {
    expect(factorial(10)).toBe(3628800);
    expect(factorial('10')).toBe(3628800);
  });
});