/**
 * Test: remove duplicates in an array
 * @function removeDuplicate
 * @param {Array} arr 
 * @returns {Array} filtered array of non-duplicates
 */
function removeDuplicate(arr) {
  if (!Array.isArray(arr)) throw new Error('Not an array');
  if (arr.length === 0) return [];

  // Without using Sets
  // return arr.reduce((acc, curr) => {
  //   if (acc.indexOf(curr) < 0) acc.push(curr);

  //   return acc;
  // }, []);

  // Using ES6 Sets
  return [...new Set(arr)];
}

module.exports  = removeDuplicate;