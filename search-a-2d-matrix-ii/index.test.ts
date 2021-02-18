import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { findNumberIn2DArray } from "./index.ts";

Deno.test("Should find the correct number", () => {
  const array = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ];

  assertStrictEquals(findNumberIn2DArray(array, 5), true);
  assertStrictEquals(findNumberIn2DArray(array, 20), false);
  assertStrictEquals(findNumberIn2DArray([], 2), false);
});
