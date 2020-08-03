/**
 * https://www.codewars.com/kata/5993eec34f5d9f2504000051/train/javascript
 * Given an array of string numbers, find the minimum possible diff between the min and max values of the array using permutation.
 * 
 * @param {[string]} s
 */
const permutations = s => {
  const permutations = s.map(n => findPermutations(n));
  let minDiff;

  for (let i = 0; i < permutations[0].length; i++) {
    const combi = permutations.map(p => p[i]);
    const sorted = combi.sort((a, b) => +a - +b);
    const diff = sorted[sorted.length - 1] - sorted[0];

    if (i === 0) minDiff = diff;
    else if (minDiff > diff) minDiff = diff;
  }

  return minDiff;
};

const findPermutations = string => {
  if (string.length < 2) return string;

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars))
      permutationsArray.push(char + permutation);
  }

  return permutationsArray;
};
