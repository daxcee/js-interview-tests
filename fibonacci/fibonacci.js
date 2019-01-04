/**
 * @function fibonacci
 * @param {number} n 
 * @returns {number}
 * Big-O is O(n)
 */
function fibonacci(n) {
  if (typeof n !== 'number') throw new Error('Invalid number');

  let fibo = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i += 1) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

/**
 * @function fibonacciRecursive
 * @param {number} n 
 * @returns {number}
 * Big-O is O(2^n)
 */
function fibonacciRecursive(n) {
  if (typeof n !== 'number') throw new Error('Invalid number');
  if (n <= 2) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

module.exports = {
  fibonacci,
  fibonacciRecursive
};