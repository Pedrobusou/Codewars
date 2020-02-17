/**
 * https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 * @param {number[]} a
 * @param {number[]} b values to remove from a
 */
const arrayDiff = (a, b) => a.filter(v => !b.includes(v));
