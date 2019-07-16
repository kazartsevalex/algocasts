// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((s, c) => c + s, '');

  // if (str.length <= 1) return str;
  //
  // let s = '';
  // for (let i = 0; i < str.length; i++) {
  //   s = str[i] + s;
  // }
  //
  // return s;

  // return str.split('').reverse().join('');
}

module.exports = reverse;
