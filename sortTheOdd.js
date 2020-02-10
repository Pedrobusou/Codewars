/**
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 * V2
 * @param {number[]} array
 */
function sortArray(array) {
  let odds = array.filter(n => n % 2).sort((a, b) => a - b);
  return array.map(n => (n % 2 ? odds.shift() : n));
}

/**
 * V1: This one mutates the given array
 * @param {number[]} array
 */
function sortArray(array) {
  let oddNums = [],
    oddPositions = [];

  array.forEach((n, i) => {
    if (n % 2 !== 0) {
      oddNums.push(n);
      oddPositions.push(i);
    }
  });

  oddNums.sort((a, b) => a - b);

  oddPositions.forEach((pos, i) => {
    array[pos] = oddNums[i];
  });

  return array;
}
