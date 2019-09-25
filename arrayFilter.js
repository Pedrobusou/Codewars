/**
 * https://www.codewars.com/kata/514a6336889283a3d2000001
 * Filter even numbers
 * @param {[number]} numbersArray 
 * @returns {[number]} Array of even numbers
 */
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(n => n % 2 === 0);
}