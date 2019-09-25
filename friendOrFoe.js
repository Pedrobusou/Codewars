/**
 * https://www.codewars.com/kata/55b42574ff091733d900002f
 * Filter array elements with lenght 4
 * @param {[string]} friends List of names
 * @return {[string]} Filtered friends
 */
function friend(friends) {
    return friends.filter(name => name.length === 4);
}