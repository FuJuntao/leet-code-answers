import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { subsets } from "./index.ts";

const format = (array: number[][]) => {
  const result: string[] = [];
  for (const item of array) {
    result.push(item.sort((a, b) => a - b).join(","));
  }
  result.sort((a, b) => a.localeCompare(b));
  return result;
};

Deno.test("Should return all the subsets", () => {
  assertEquals(
    format(subsets([1, 2, 3])),
    format([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  );
  assertEquals(format(subsets([0])), format([[], [0]]));
});
