const chunkArray = require('./chunkArray');

describe('Chunk Array', () => {
  describe('Is Valid', () => {
    test('Throw an error if non-array input', () => {
      expect(() => chunkArray('apple', 1)).toThrow();
    });

    test('Throw an error if size is less than zero', () => {
      expect(() => chunkArray([1,2,3], -1)).toThrow();
    });

    test('Throw an error with no input', () => {
      expect(() => chunkArray()).toThrow();
    });

    test('Throw an error if size is not of type number', () => {
      expect(() => chunkArray([1,2,3], '1')).toThrow();
      expect(() => chunkArray([1,2,3], 'apple')).toThrow();
    });
  });

  test('Expect size of 0 to return original array', () => {
    const arr = [1, 2, 3];
    expect(chunkArray(arr, 0)).toEqual(arr);
  });

  test('Expect one sub-array is size is greater than array length', () => {
    const arr = [1, 2, 3];
    expect(chunkArray(arr, 100)).toEqual([arr]);
  });

  test('Original array is unmodified', () => {
    const arr = [1, 2, 3, 4, 5];
    const expectedArray = [[1, 2], [3, 4], [5]];
    expect(chunkArray(arr, 2)).toEqual(expectedArray);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('Expect [[1, 2], [3, 4], [5, 6]]', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expectedArray = [[1, 2], [3, 4], [5, 6]];
    expect(chunkArray(arr, 2)).toEqual(expectedArray);
  });

  test('Expect [[0, 1, 2], [3, 4, 5]]', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const expectedArray = [[0, 1, 2], [3, 4, 5]];
    expect(chunkArray(arr, 3)).toEqual(expectedArray);
  });

  test('Expect [[0, 1, 2, 3], [4, 5]]', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const expectedArray = [[0, 1, 2, 3], [4, 5]];
    expect(chunkArray(arr, 4)).toEqual(expectedArray);
  });
});