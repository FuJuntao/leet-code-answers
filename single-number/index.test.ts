import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { singleNumber } from "./index.ts";

Deno.test("array: [4, 1, 2, 1, 2] single number is 4", () => {
  assertStrictEquals(singleNumber([4, 1, 2, 1, 2]), 4);
});
