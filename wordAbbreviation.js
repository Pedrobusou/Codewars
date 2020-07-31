/**
 * https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript
 * Abbreviate words using numbers. Example: internationalization => i18n
 *
 * @param {string} string
 */
const abbreviate = string =>
  string
    .split(' ')
    .map(word => {
      const hasColon = word.includes(',');

      if (hasColon) word = word.replace(',', '');
      if (word.length < 4) return `${word}${hasColon ? ',' : ''}`;

      return `${
        word.includes('-') ? abbreviateHyphenWord(word) : abbreviateWord(word)
      }${hasColon ? ',' : ''}`;
    })
    .join(' ');

const abbreviateHyphenWord = hyphenWord =>
  hyphenWord
    .split('-')
    .map(w => abbreviateWord(w))
    .join('-');

const abbreviateWord = word =>
  `${word[0]}${word.length - 2}${word[word.length - 1]}`;

/**
 * Second attemp using regex
 *
 * @param {string} string
 */
const abbreviate = string =>
  string.replace(/\w{4,}/g, w => w[0] + (w.length - 2) + w.slice(-1));
