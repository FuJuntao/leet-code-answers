import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { maxSubArray } from "./index.ts";

Deno.test("Should return correct maximum sub-array", () => {
  assertStrictEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  assertStrictEquals(maxSubArray([2, 3]), 5);
});
