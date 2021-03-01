import { assertStrictEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { findMedianSortedArrays } from "./index.ts";

Deno.test("should return the correct median", () => {
  const nums1 = [1, 2, 3, 4, 5, 6, 7, 18, 20, 23, 24];
  const nums2 = [4, 5, 6, 7, 13, 14, 15, 20, 28, 30];

  assertStrictEquals(findMedianSortedArrays(nums1, nums2), 7);
});

Deno.test("should return the correct median", () => {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [4, 5, 6, 7, 13, 14, 15, 20, 28, 30];

  assertStrictEquals(findMedianSortedArrays(nums1, nums2), 6.5);
});
