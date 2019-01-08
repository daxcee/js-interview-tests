const largestNumbers = require('./largestNumbers');

describe('Largest Numbers', () => {
  describe('Valid Input', () => {
    test('Throw an error if input is not an array', () => {
      expect(() => largestNumbers(9)).toThrow();
    });

    test('Throw an error if an array of numbers, NOT an array of sub-array of numbers', () => {
      expect(() => largestNumbers([1,2,3])).toThrow();
    });

    test('Throw an error if a sub-array value is not type number', () => {
      expect(() => largestNumbers([['a', 1, 2], [3, 4, 5]])).toThrow();
    });

    test('Throw an error if a sub-array contains a sub-array', () => {
      expect(() => largestNumbers([['a', 1, 2], [3, [1, 2, 4], 5]])).toThrow();
    });
  });

  let defaultArray = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
  let expectedArray = [27, 5, 39, 1001];

  test('Expect an array returned', () => {
    expect(Array.isArray(largestNumbers(defaultArray))).toBe(true);
  });

  test('Expect an array of [27, 5, 39, 1001]', () => {
    expect(largestNumbers(defaultArray)).toEqual(expectedArray);
  });

  test('Expect an array of [9, 35, 97, 1000000]', () => {
    defaultArray = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
    expectedArray = [9, 35, 97, 1000000];
    expect(largestNumbers(defaultArray)).toEqual(expectedArray);
  });

  test('Expect an array of [25, 48, 21, -3]', () => {
    defaultArray = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
    expectedArray = [25, 48, 21, -3];
    expect(largestNumbers(defaultArray)).toEqual(expectedArray);
  });

  test('Expect an array of [100]', () => {
    defaultArray = [[1, 2, 100]];
    expectedArray = [100];
    expect(largestNumbers(defaultArray)).toEqual(expectedArray);
  });
});