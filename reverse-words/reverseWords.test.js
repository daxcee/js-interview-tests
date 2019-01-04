const reverseWords = require('./reverseWords');

describe('Reverse Words', () => {
  test('Throw error on non-string', () => {
    expect(() => reverseWords(9)).toThrow();
  });

  test('Return string value', () => {
    const reversed = reverseWords('Hello world');
    expect(typeof reversed).toBe('string');
  });

  test('"Hello world!" to "olleH !dlrow"', () => {
    const input = "Hello world!";
    const output = "olleH !dlrow";
    const reversed = reverseWords(input);
    expect(reversed).toBe(output);
  });

  test('"Hello  many   spaces world!" to "olleH  ynam   secaps !dlrow"', () => {
    const input = "Hello  many   spaces world!";
    const output = "olleH  ynam   secaps !dlrow";
    const reversed = reverseWords(input);
    expect(reversed).toBe(output);
  });

  test('"Hello" to "olleH"', () => {
    const input  = "Hello";
    const output = "olleH";
    const reversed = reverseWords(input);
    expect(reversed).toBe(output);
  });
});