const toInt = (n: number) => Math.floor(n);

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;

  let leftEdge = 0;
  let rightEdge = nums1Length;

  while (leftEdge <= rightEdge) {
    const i = toInt((rightEdge - leftEdge) / 2);
    const j = toInt((nums1Length + nums2Length) / 2) - i;

    const left1 = nums1[i];
    const left2 = nums2[j];
    const right1 = nums1[i + 1];
    const right2 = nums2[j + 1];

    if (left1 <= right2) {
      leftEdge = i + 1;
    } else {
      rightEdge = i - 1;
    }
  }

  return leftEdge;
}

const nums1 = [1, 2, 3, 4, 5, 6, 7, 18, 20, 23, 24];
const nums2 = [4, 5, 6, 7, 13, 14, 15, 20, 28, 30];
findMedianSortedArrays(nums1, nums2);
