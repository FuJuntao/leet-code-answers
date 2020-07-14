export function hammingDistance(x: number, y: number): number {
  // 异或之后，这个数字的二进制有多少位 1，这两个数就有多少不同的位
  let xor = x ^ y;
  let distance = 0;
  while (xor) {
    distance += 1;
    // 移除最右侧的等于 1 的位
    xor = xor & (xor - 1);
  }
  return distance;
}
