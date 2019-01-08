/**
 * Test: Write a function that splits an array into groups of a specified length
 * @function chunkArray
 * @param {Array} arr - Array of any-type values
 * @param {number} size - Length of sub-arrays to chunk
 * @returns {Array} - Two-dimensional array
 */
function chunkArray(arr, size) {
  if (typeof arr === 'undefined' || typeof size === 'undefined') throw new Error('Invalid Input: must include an array and size parameter');
  if (!Array.isArray(arr)) throw new Error('Invalid Input: First argument must be an array');
  if (typeof size !== 'number') {
    throw new Error('Invalid Input: the second argument must be of type number');
  } else {
    if (size < 0) throw new Error('Invalid Input: the second argument must be non-negative');
  }

  if (size === 0) return arr.slice();
  if (size > arr.length) return [arr.slice()];

  const result = [];
  const length = arr.length;
  for (let i = 0; i < length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

module.exports = chunkArray;