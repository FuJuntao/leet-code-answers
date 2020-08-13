export function removeDuplicates(nums: number[]): number {
  let count = 1;
  let newArrayPointer = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[newArrayPointer] !== nums[i]) {
      nums[newArrayPointer + 1] = nums[i];
      newArrayPointer += 1;
      count += 1;
    }
  }

  return count;
}
