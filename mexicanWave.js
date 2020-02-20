/**
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
 * V1
 * @param {string} str
 * @returns {string[]} waved string
 */
const wave = str => {
  const waved = [];

  for (let i = 0; i < str.length; i++)
    if (str[i].trim())
      waved.push(
        str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1, str.length)
      );

  return waved;
};

/**
 * V2
 * @param {string} str
 * @returns {string[]} waved string
 */
const wave = str =>
  [...str]
    .map(
      (char, i) =>
        char.trim() &&
        str.substr(0, i) + char.toUpperCase() + str.substr(i + 1, str.length)
    )
    .filter(char => char);

/**
 * V3
 * @param {string} str
 * @returns {string[]} waved string
 */
const wave = str => {
  const waved = [];

  [...str].forEach(
    (char, i) =>
      char.trim() &&
      waved.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1))
  );

  return waved;
};
