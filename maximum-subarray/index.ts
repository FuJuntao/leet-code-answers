function maxSubArray(nums: number[]): number {
  let maxSumOfSubArray = nums[0];
  let maxSumOfPrevious = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    // i 是当前 subArray 最后一项的 index
    // maxSumOfSubArrayEndedWith-i = max(maxSubArray(nums.slice(0, i)) + nums[i], nums[i])
    maxSumOfPrevious = Math.max(maxSumOfPrevious + nums[i], nums[i]);
    maxSumOfSubArray = Math.max(maxSumOfSubArray, maxSumOfPrevious);
  }

  return maxSumOfSubArray;
}

export { maxSubArray };
