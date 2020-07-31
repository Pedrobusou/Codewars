/**
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 * Find the maximum sum of a contiguous subsequence in an array of integers
 *
 * @param {[number]} arr
 */
const maxSequence = arr => {
  let max = 0;

  for (let i = 0; i < arr.length; i++)
    for (let sum = 0, j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }

  return max;
};
