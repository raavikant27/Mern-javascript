const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [m, n] = input[0].split(' ').map(Number);
  let matrix = [];
  for (let i = 1; i <= m; i++) {
    matrix.push(input[i].split(' ').map(Number));
  }
  boundaryTraversal(m, n, matrix);
});

function boundaryTraversal(m, n, matrix) {
  let result = [];

  // Top row
  for (let j = 0; j < n; j++) {
    result.push(matrix[0][j]);
  }

  // Right column (excluding top cell if already included)
  for (let i = 1; i < m; i++) {
    result.push(matrix[i][n - 1]);
  }

  // Bottom row (only if more than 1 row)
  if (m > 1) {
    for (let j = n - 2; j >= 0; j--) {
      result.push(matrix[m - 1][j]);
    }
  }

  // Left column (only if more than 1 column)
  if (n > 1) {
    for (let i = m - 2; i >= 1; i--) {
      result.push(matrix[i][0]);
    }
  }

  // Print result
  for (let val of result) {
    console.log(val);
  }
}
