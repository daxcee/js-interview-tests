const sumOfRange = require('./sumOfRange');

describe('Sum of Range', () => {
  describe('Is Valid', () => {
    test('Throw error if non-array', () => {
      expect(() => sumOfRange('apple')).toThrow();
    });

    test('Throw an error if array values are not numbers', () => {
      expect(() => sumOfRange(['a', 'b'])).toThrow();
    });
  });

  test('Expect a number returned', () => {
    expect(typeof sumOfRange([1, 4])).toBe('number');
  });

  test('[1, 4] or [4, 1] -> 10', () => {
    expect(sumOfRange([1, 4])).toBe(10);
    expect(sumOfRange([4, 1])).toBe(10);
  });

  test('[5, 10] or [10, 5] -> 10', () => {
    expect(sumOfRange([5, 10])).toBe(45);
    expect(sumOfRange([10, 5])).toBe(45);
  });
});