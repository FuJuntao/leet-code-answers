/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 当 n 为偶数时，需要枚举 n^2 / 4 个位置
  // 当 n 为奇数时，需要枚举 (n^2-1) / 4 个位置
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
}

export { rotate };
