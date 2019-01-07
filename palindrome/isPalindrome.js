/**
 * @function isPalindrome
 * @param {string} str - word to check if palindrome
 * @returns {boolean} - true or false if word is a palindrome
 */
const isPalindrome = str => {
  if (typeof str !== 'string') throw new Error('Invalid string');

  str = str.toLowerCase();

  return str === str.split('').reverse().join('');
};

module.exports = isPalindrome;