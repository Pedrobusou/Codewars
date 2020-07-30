/**
 * https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
 * @param {[{name: string}]} names
 */
const list = names => {
  if (names.length > 1) {
    const lastName = names.pop();
    return `${names.map(e => e.name).join(', ')} & ${lastName.name}`;
  } else if (names.length > 0) {
    return `${names[0].name}`;
  } else {
    return ``;
  }
};
