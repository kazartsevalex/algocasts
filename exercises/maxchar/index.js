// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function getCharMap(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function maxChar(str) {
  const charMap = getCharMap(str);

  let max = 0;
  let resChar = '';

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      resChar = char;
    }
  }

  return resChar;
}

module.exports = maxChar;
