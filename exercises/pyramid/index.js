// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = '') {
  if (row === n) return;

  const max = n * 2 - 1;
  if (str.length === max) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  const midLeft = Math.floor(max / 2) - row;
  const midRight = Math.floor(max / 2) + row;

  if (str.length >= midLeft && str.length <= midRight) {
    str += '#';
  } else {
    str += ' ';
  }

  pyramid(n, row, str);



  // const max = n * 2 - 1;
  //
  // for (let row = 0; row < n; row++) {
  //   let str = '';
  //   const midRight = Math.floor(max / 2) + row;
  //   const midLeft = Math.floor(max / 2) - row;
  //
  //   for (let col = 0; col < max; col++) {
  //     if (col >= midLeft && col <= midRight) {
  //       str += '#';
  //     } else {
  //       str += ' ';
  //     }
  //   }
  //   console.log(str);
  // }
}

module.exports = pyramid;
