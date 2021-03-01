function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]];
  for (const n of nums) {
    const length = result.length;
    for (let i = 1; i < length; i++) {
      result.push(result[i].concat(n));
    }
    result.push([n]);
  }
  return result;
}

export { subsets };
