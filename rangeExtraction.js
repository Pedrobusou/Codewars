/**
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
 * Format string into ranges.
 *
 * @param {[number]} list
 */
const solution = list => {
  const rangeFormat = [];

  for (let i = 0; i < list.length; i++) {
    if (isSequence(list, i) && isSequence(list, i + 1)) {
      const start = list[i];
      while (isSequence(list, i)) i++;
      rangeFormat.push(`${start}-${list[i]}`);
    } else rangeFormat.push(list[i]);
  }

  return rangeFormat.join();
};

/**
 * Check next value of array equals previous +1
 * @param {[number]} nums
 * @param {number} i
 */
const isSequence = (nums, i) =>
  nums[i + 1] !== undefined && nums[i + 1] === nums[i] + 1;
