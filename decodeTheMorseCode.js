//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

/**
 * First: gets the job done
 * @param {string} morseCode
 */
function decodeMorse(morseCode) {
  const morseWords = morseCode.trim().split('   ');
  const decodedWords = morseWords.map(w => {
    const morseLetters = w.split(' ');
    const decodedLetters = morseLetters.map(l => MORSE_CODE[l]);
    return decodedLetters.join('');
  });

  return decodedWords.join(' ');
}

/**
 * Second: Split into functions. More readable, more reusable. Over documented
 * Turns morse code into readable format
 * @param {string} morseCode
 * @return {string} decoded text
 * @example Input: ".... . -.--   .--- ..- -.. ." Output: "HEY JUDE"
 */
const decodeMorse = morseCode => {
  return morseCode
    .trim() //Remove additional spaces at beginning and end
    .split('   ') //Split words
    .map(decodeMorseWord)
    .join(' ');
};

/**
 * @param {string} word sequence of morse letters, divided by one space
 * @return {string} decoded word
 * @example Input: ".... . -.--" Output: "HEY"
 */
const decodeMorseWord = word =>
  word
    .split(' ') //Split encoded chars
    .map(decodeMorseLetter)
    .join('');

/**
 * @param {string} letter sequence of chars without spaces
 * @return {string} decoded letter
 * @example Input: "-.--" Output: "Y"
 */
const decodeMorseLetter = letter => MORSE_CODE[letter];

/**
 * Short, for function chaining nerds
 * @param {string} morseCode
 */
const decodeMorse = morseCode =>
  morseCode
    .trim()
    .split('   ')
    .map(w =>
      w
        .split(' ')
        .map(l => MORSE_CODE[l])
        .join('')
    )
    .join(' ');
