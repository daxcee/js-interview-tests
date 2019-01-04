/**
 * Test: reverse a string
 * @function reverseString
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
  if (typeof str !== 'string') throw new Error('Invalid string');

  return str.split('').reverse().join('');

  // using a loop
  // let result = '';
  // for(let i = str.length - 1; i >= 0; i -= 1) {
  //   result += str[i];
  // }

  // return result;
}

module.exports = reverseString;