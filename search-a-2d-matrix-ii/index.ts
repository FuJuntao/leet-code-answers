interface Point {
  x: number;
  y: number;
}

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const point: Point = { x: 0, y: (matrix[0]?.length ?? 0) - 1 };
  while (point.x < matrix.length && point.y >= 0) {
    const n = matrix[point.x][point.y];
    if (target < n) {
      point.y = point.y - 1;
    } else if (target > n) {
      point.x = point.x + 1;
    } else {
      return true;
    }
  }

  return false;
}

export { findNumberIn2DArray };
