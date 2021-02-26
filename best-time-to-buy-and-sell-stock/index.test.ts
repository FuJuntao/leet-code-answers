import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { maxProfit } from "./index.ts";

Deno.test("should return the max profit", () => {
  assertStrictEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assertStrictEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
