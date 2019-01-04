const removeDuplicate = require('./removeDuplicate');

describe('removeDuplcate', () => {
  test('Throw error on non-array', () => {
    expect(() => removeDuplicate('string')).toThrow();
  });

  test('Should return [1,2,3]', () => {
    const input = [1, 1, 2, 2, 3, 3];
    const output = [1, 2, 3];

    expect(removeDuplicate(input)).toEqual(output);
  });

  test('Should return []', () => {
    expect(removeDuplicate([])).toEqual([]);
  });

  test('Should return [9, 7, 2, 100]', () => {
    const input = [9, 9, 9, 9, 7, 2, 100];
    const output = [9, 7, 2, 100];

    expect(removeDuplicate(input)).toEqual(output);
  });
});