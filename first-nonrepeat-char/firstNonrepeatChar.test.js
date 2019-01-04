const firstNonrepeatChar = require('./firstNonrepeatChar');

describe('First non-repeat Char', () => {
  test('Throws error on non-string', () => {
    expect(() => firstNonrepeatChar(9)).toThrow();
  });

  test('Return type string', () => {
    const result = firstNonrepeatChar('hello');
    expect(typeof result).toBe('string');
  });

  test('"Hello" returns "H"', () => {
    const result = firstNonrepeatChar('Hello');
    expect(result).toBe('H');
  });

  test('"the quick brown fox jumps then quickly blow air" returns "f"', () => {
    const result = firstNonrepeatChar("the quick brown fox jumps then quickly blow air");
    expect(result).toBe('f');
  });

  test('Returns space "ttt xxx"', () => {
    const result = firstNonrepeatChar("ttt xxx");
    expect(result).toBe(' ');
  });

  test('Returns empty "tttxxx"', () => {
    const result = firstNonrepeatChar("tttxxx");
    expect(result).toBe('');
  });
});