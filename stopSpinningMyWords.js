/**
 * https://www.codewars.com/kata/5264d2b162488dc400000001
 * @param {*} string One or more words sepparated by " "
 * @returns {string} Given string, but with all five or more letter words reversed 
 */
function spinWords(string) {
    return string.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ');
}

/*
    Examples:
        Hey fellow warriors => Hey wollef sroirraw
        This is a test => This is a test
        This is another test => This is rehtona test
*/