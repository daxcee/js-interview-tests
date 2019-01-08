/**
 * Test: Given an array of two numbers, return the sume of those two numbers plus the sum of all numbers between them
 * @function sumOfRange
 * @param {Array} arr - array of 2 numeric value
 * @returns {number} - sum of range of two numbers
 */
function sumOfRange(arr) {
  if (!Array.isArray(arr)) throw new Error('Invalid input: type must be of Array');
  if (arr.length !== 2 || (typeof arr[0] !== 'number' || typeof arr[1] !== 'number')) throw new Error('Invalid input: values of array must be two numbers');

  const low = Math.min(...arr);
  const high = Math.max(...arr);
  let sum = 0;
  for (let i = low; i <= high; i += 1) sum += i;

  return sum;
}

module.exports = sumOfRange;