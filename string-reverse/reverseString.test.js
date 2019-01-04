const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('Throw error on non-string', () => {
    expect(() => reverseString(9)).toThrow();
  });

  test('Return type string', () => {
    const reverse = reverseString('Hello');
    expect(typeof reverse).toBe('string');
  });

  test('Return "olleH"', () => {
    const reverse = reverseString('Hello');
    expect(reverse).toBe('olleH');
  });
});