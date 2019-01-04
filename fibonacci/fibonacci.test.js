const {
  fibonacci,
  fibonacciRecursive
} = require('./fibonacci');

describe('Fibonacci Non-recursive', () => {
  test('Should throw error on non-number', () => {
    expect(() => fibonacci('string')).toThrow();
  });

  test('Should return a number', () => {
    expect(typeof fibonacci(2)).toBe('number');
  });

  test('fibonacci(12) returns 144', () => {
    expect(fibonacci(12)).toBe(144);
  });

  test('fibonacci([<=2]) is 1', () => {
    expect(fibonacci(-1)).toBe(1);
    expect(fibonacci(0)).toBe(1);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci(5) is 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci(7) is 13', () => {
    expect(fibonacci(7)).toBe(13);
  });
});

describe('Fibonacci Recursive', () => {
  test('Should throw error on non-number', () => {
    expect(() => fibonacciRecursive('string')).toThrow();
  });

  test('Should return a number', () => {
    expect(typeof fibonacciRecursive(2)).toBe('number');
  });

  test('fibonacciRecursive(12) returns 144', () => {
    expect(fibonacciRecursive(12)).toBe(144);
  });

  test('fibonacciRecursive([<=2]) is 1', () => {
    expect(fibonacciRecursive(-1)).toBe(1);
    expect(fibonacciRecursive(0)).toBe(1);
    expect(fibonacciRecursive(1)).toBe(1);
    expect(fibonacciRecursive(2)).toBe(1);
  });

  test('fibonacciRecursive(5) is 5', () => {
    expect(fibonacciRecursive(5)).toBe(5);
  });

  test('fibonacciRecursive(7) is 13', () => {
    expect(fibonacciRecursive(7)).toBe(13);
  });
});