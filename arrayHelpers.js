/**
 * https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
 * Extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd()
 */

Array.prototype.square = function () {
  return this.map(e => e ** 2);
};

Array.prototype.cube = function () {
  return this.map(e => e ** 3);
};

Array.prototype.average = function () {
  if (!this.length) return NaN;
  return this.reduce((r, e) => r + e) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((r, e) => r + e);
};

Array.prototype.even = function () {
  return this.filter(e => e % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(e => e % 2 !== 0);
};
