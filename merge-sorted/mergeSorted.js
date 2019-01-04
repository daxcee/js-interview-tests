/**
 * @function mergeSortedArray
 * @param {Array} a - sorted array
 * @param {Array} b - sorted array
 * @returns {Array} merged - merged sorted array
 */
function mergeSortedArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) throw new Error('Invalid arrays');

  const merged = [];
  let aStart = a[0];
  let bStart = b[0];
  let i = 1;
  let j = 1;

  if (a.length === 0) return b;
  if (b.length === 0) return a;

  return [].concat(a, b).sort();

  // while(aStart || bStart) {
  //   if ((aStart && !bStart) || aStart < bStart) {
  //     merged.push(aStart);
  //     aStart = a[i++];
  //   } else {
  //     merged.push(bStart);
  //     bStart = b[j++];
  //   }
  // }

  // return merged;
}

module.exports = mergeSortedArray;