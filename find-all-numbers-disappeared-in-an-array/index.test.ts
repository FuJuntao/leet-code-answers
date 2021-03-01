import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { findDisappearedNumbers } from "./index.ts";

Deno.test("Should return an array contains missing numbers", () => {
  assertEquals(findDisappearedNumbers([1, 1]), [2]);
  assertEquals(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
});
