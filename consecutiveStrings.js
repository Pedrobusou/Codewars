/**
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 * @param {string[]} strarr
 * @param {number} k
 */
function longestConsec(strarr, k) {
  let longestStr = '';

  if (k <= strarr.length && k > 0)
    for (let i = 0; i < strarr.length; i++) {
      let challengerStr = strarr.slice(i, i + k).join('');
      longestStr.length < challengerStr.length && (longestStr = challengerStr);
    }

  return longestStr;
}

/**
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 * V2
 * @param {string[]} strarr
 * @param {number} k
 */
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  return strarr.reduce((longestStr, item, i) => {
    const challengerStr = strarr.slice(i, i + k).join('');

    return challengerStr.length > longestStr.length
      ? challengerStr
      : longestStr;
  }, '');
}
