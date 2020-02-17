/**
 * https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 * @param {number} n
 * @param {number} p powers
 */
function digPow(n, p) {
  const k =
    n
      .toString()
      .split('')
      .reduce((t, v) => t + Math.pow(+v, p++), 0) / n;

  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
