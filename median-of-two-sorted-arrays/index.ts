const toInt = (n: number) => Math.floor(n);

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;

  let leftEdge = 0;
  let rightEdge = nums1Length - 1;

  while (leftEdge >= rightEdge) {
    const i = toInt((rightEdge - leftEdge) / 2);
    const j = toInt((nums1Length + nums2Length) / 2) - i;

    const leftSideLargest = Math.max(nums1[i], nums2[j]);
    const rightSideSmallest = Math.min(nums1[i + 1], nums2[j + 1]);

    if (leftSideLargest > rightSideSmallest) {
    }

    rightEdge = -1;
  }

  return 2;
}
