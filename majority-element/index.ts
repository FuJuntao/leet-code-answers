export function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}
