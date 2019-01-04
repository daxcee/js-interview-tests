const stringReverse = require('../string-reverse/reverseString');

/**
 * Test: Given a string of words, reverse words without change their place
 * @function reverseWords
 * @param {string} str 
 * @return {string}
 */
function reverseWords(str) {
  if (typeof str !== 'string') throw new Error('Invalid string');

  return str.split(' ')
    .map(stringReverse)
    .join(' ');
}

module.exports = reverseWords;