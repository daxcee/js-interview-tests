const celsiusToFahrenheit = require('./celsiusToFahrenheit');

describe('Celsius to Fahrenheight', () => {
  test('Throw an error if non-string or non-number', () => {
    expect(() => celsiusToFahrenheit([1,2,3])).toThrow();
  });

  test('Throw an error is string, but non-numeric value', () => {
    expect(() => celsiusToFahrenheit('apple')).toThrow();
  });

  test('Expect to return a number', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit('0')).toBe(32);
  });

  test('0C -> 32F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  test('100C -> 212F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  test('-32C -> 0F', () => {
    expect(celsiusToFahrenheit(-32)).toBe(-25.6);
  });

  test('200C -> 392F', () => {
    expect(celsiusToFahrenheit(200)).toBe(392);
  });
});