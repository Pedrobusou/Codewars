/**
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 * @param {number[]} arr
 * @param {number} n max ocurrences of a num inside arr
 */
const deleteNth = (arr, n) =>
  arr.reduce(
    (total, x) =>
      total.filter(y => y == x).length < n ? total.concat(x) : total,
    []
  );
