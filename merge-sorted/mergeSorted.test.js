const mergeSortedArray = require('./mergeSorted');

describe('mergeSortedArray', () => {
  test('Throws error in non-arrays', () => {
    expect(() => mergedSortedArray('string', [])).toThrow();
    expect(() => mergeSortedArray([], 'string')).toThrow();
    expect(() => mergeSortedArray('string', 'string')).toThrow();
  });

  test('Returns a type array', () => {
    const a = [];
    const b = [];
    const merged = mergeSortedArray(a, b);
    expect(Array.isArray(merged)).toBe(true);
  });

  test('Returns a [1, 2, 3, 4, 5, 6]', () => {
    const a = [1, 2, 4, 5];
    const b = [3, 6];
    const merged = mergeSortedArray(a, b);
    const output = [1, 2, 3, 4, 5, 6];

    expect(merged).toEqual(output);
  })
})