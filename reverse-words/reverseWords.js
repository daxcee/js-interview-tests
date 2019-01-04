const stringReverse = require('../string-reverse/reverseString');

function reverseWords(str) {
  if (typeof str !== 'string') throw new Error('Invalid string');

  return str.split(' ')
    .map(stringReverse)
    .join(' ');
}

module.exports = reverseWords;