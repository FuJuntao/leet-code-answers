/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const width = matrix.length - 1;

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j = 0; j < Math.floor((matrix.length + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[width - j][i];
      matrix[width - j][i] = matrix[width - i][width - j];
      matrix[width - i][width - j] = matrix[j][width - i];
      matrix[j][width - i] = temp;
    }
  }
}

export { rotate };
