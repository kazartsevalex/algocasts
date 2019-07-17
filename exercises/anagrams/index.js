// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return stringA === stringB;



  // stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  //
  // if (stringA.length !== stringB.length) return false;
  //
  // const a = stringA.split('').sort();
  // const b = stringB.split('').sort();
  //
  // return a.every((char, i) => char === b[i]);




  // const a_counts = getCounts(stringA);
  // const b_counts = getCounts(stringB);
  //
  // if (Object.keys(a_counts).length !== Object.keys(b_counts).length) return false;
  //
  // for (let char in a_counts) {
  //   if (a_counts[char] !== b_counts[char]) return false;
  // }
  //
  // return true;
  //
  // function getCounts(str) {
  //   const charMap = {};
  //
  //   str = str.replace(/[^\w]/g, '').toLowerCase();
  //
  //   for (let char of str) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }
  //
  //   return charMap;
  // }
}

module.exports = anagrams;
