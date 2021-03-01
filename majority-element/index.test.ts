import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { majorityElement } from "./index.ts";

[3, 2, 3, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6];

Deno.test("Should return the right index of majority element", () => {
  assertEquals(
    majorityElement([3, 2, 3, 1, 2, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6]),
    6
  );

  assertEquals(majorityElement([3, 4, 3]), 3);

  assertEquals(majorityElement([1]), 1);
});
