/**
 * Test: identify first non-repeated character (ignore spaces)
 * @function firstNonRepeatChar
 * @param {string} str 
 * @returns {string}
 */
function firstNonRepeatChar(str) {
  if (typeof str !== 'string') throw new Error('Invalid string');

  str = str.replace(/\s/g, ''); // get rid of spaces
  const length = str.length;
  let char;
  const charMap = {};

  for (let i = 0; i < length; i += 1) {
    char = str[i];
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] === 1) return char;
  }

  return '';
};

module.exports = firstNonRepeatChar;