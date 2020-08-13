import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { removeDuplicates } from "./index.ts";

Deno.test("Should remove duplicated item from array", () => {
  const array = [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 5];
  const resultArray = [1, 2, 3, 5];

  assertStrictEquals(removeDuplicates(array), resultArray.length);

  assertEquals(array.slice(0, resultArray.length), resultArray);
});
