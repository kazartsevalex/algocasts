// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, count = 0, str = '') {
  // if (count === n) return;
  //
  // if (str.length === n) {
  //   console.log(str);
  //   return steps(n, count + 1);
  // }
  //
  // if (str.length <= count) {
  //   str += '#';
  // } else {
  //   str += ' ';
  // }
  // steps(n, count, str);


  // for (let row = 0; row < n; row++) {
  //   let stair = '';
  //
  //   for (let col = 0; col < n; col++) {
  //     if (col <= row) {
  //       stair += '#';
  //     } else {
  //       stair += ' ';
  //     }
  //   }
  //
  //   console.log(stair);
  // }



  const arr = new Array(n);
  arr.fill(' ');

  for (let i = 0; i < n; i++) {
    arr[i] = '#';
    console.log(arr.join(''));
  }
}

module.exports = steps;
