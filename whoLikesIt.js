/**
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362
 * Create a string that varies depending on the array length
 * @param {[string]} names 
 * @returns {string} 
 */
function likes(names) {
    let msg = '';
    names = names || [];//ensure we work with an array

    switch (names.length) {
        case 0: msg = `no one`; break;
        case 1: msg = `${names[0]}`; break;
        case 2: msg = `${names[0]} and ${names[1]}`; break;
        case 3: msg = `${names[0]}, ${names[1]} and ${names[2]}`; break;
        default: msg = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
    }

    return msg += names.length < 2 ? ` likes this` : ` like this`;//prevent duplicating the final part of the string
}

/*
    Examples:
        no one likes this
        Pedro likes this
        Pedro and Fran like this
        Pedro, Fran and Omar like this
        Pedro, Fran and 3 others like this
*/
