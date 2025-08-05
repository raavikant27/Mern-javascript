function rotateMatrixInPlace(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// Example usage:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let result = rotateMatrixInPlace(matrix);
console.log(result); 
// Output:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
