/**
 * 
 * @function largestNumbers
 * @param {Array} arr - array of array of numbers
 * @returns {Array} - an array of max values of sub-arrays
 */
function largestNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error('Invalid input: Must be an array');

  const getMax = a => Math.max(...a);
  const length = arr.length;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const subArray = arr[i];

    // Verify it is an array
    if (!Array.isArray(subArray)) throw new Error('Invalid array item: Must be an array');
    // Verify contents are numeric
    if (!subArray.every(item => typeof item === 'number'))  throw new Error('Invalid sub-array values: Sub-array must contain numerical values');

    result.push(getMax(subArray));
  }
  return result;

  // Reduce solution
  // return arr.reduce((acc, subArray) => {
  //   // Verify it is an array
  //   if (!Array.isArray(subArray)) throw new Error('Invalid array item: Must be an array');
  //   // Verify contents are numeric
  //   if (!subArray.every(item => typeof item === 'number'))  throw new Error('Invalid sub-array values: Sub-array must contain numerical values');

  //   return acc.concat(getMax(subArray));
  // }, []);
}

module.exports = largestNumbers;