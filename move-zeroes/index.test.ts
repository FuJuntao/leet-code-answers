import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { moveZeroes } from "./index.ts";

Deno.test("Should move zeros to the end of the array", () => {
  const array = [0, 1, 0, 3, 12];
  moveZeroes(array);
  assertEquals(array, [1, 3, 12, 0, 0]);
});
