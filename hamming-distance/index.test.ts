import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { hammingDistance } from "./index.ts";

Deno.test("the hamming distance between 1 and 4 is 2", () => {
  assertStrictEquals(hammingDistance(1, 4), 2);
});

Deno.test("the hamming distance between 255 and 3 is 6", () => {
  assertStrictEquals(hammingDistance(255, 3), 6);
});
