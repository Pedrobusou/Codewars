/**
 * https://www.codewars.com/kata/551f37452ff852b7bd000139
 * Sum two numbers and return the result as binary string
 * @param {number} a 
 * @param {number} b 
 * @returns {string} result as binary string
 */
function addBinary(a, b) {
    return (a + b).toString(2); //toString(2) directly converts the result into binary string
}