function moveZeroes(nums: number[]): void {
  /** Index of the first zero element */
  let i = 0;
  /** Traverse the array */
  let j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i += 1;
    }
    j += 1;
  }
}

export { moveZeroes };
