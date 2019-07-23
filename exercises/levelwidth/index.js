// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counts = [0];
  const nodes = [root, 'end'];

  while (nodes.length > 1) {
    let node = nodes.shift();

    if (node === 'end') {
      counts.push(0);
      nodes.push('end');
    } else {
      counts[counts.length - 1]++;
      nodes.push(...node.children);
    }
  }

  return counts;
}

module.exports = levelWidth;
