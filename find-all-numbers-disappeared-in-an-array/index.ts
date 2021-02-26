function findDisappearedNumbers(nums: number[]): number[] {
  // 核心思想是通过原地修改数组，在对应的 index 上通过将其标记为负数，表示该项对应的 index+1 的值即为出现过的数字
  for (const n of nums) {
    const index = Math.abs(n) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  const result: number[] = [];
  nums.forEach((n, index) => {
    if (n > 0) {
      result.push(index + 1);
    }
  });
  return result;
}

// 通过声明一个 map 来保存出现过的数字的个数
// function findDisappearedNumbers(nums: number[]): number[] {
//   const count: { [key: number]: number } = {};
//   nums.forEach((n) => {
//     count[n] = (count[n] ?? 0) + 1;
//   });
//   const result: number[] = [];
//   for (let i = 1; i <= nums.length; i += 1) {
//     if (!count[i]) result.push(i);
//   }
//   return result;
// }

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

export { findDisappearedNumbers };
