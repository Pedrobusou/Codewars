/**
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 * @param {string} words sepparated by " "
 */
const order = words => {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) > b.match(/\d/))
    .join(' ');
};
