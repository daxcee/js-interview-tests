const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  test('Throw error if non-string', () => {
    expect(() => isPalindrome(9)).toThrow();
  });

  test('Return false for "hello"', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('Return false for "test"', () => {
    expect(isPalindrome('test')).toBe(false);
  });

  test('Return true for "wow"', () => {
    expect(isPalindrome('wow')).toBe(true);
  });

  test('Return true for "woW". Case insensitive', () => {
    expect(isPalindrome('woW')).toBe(true);
  });
});