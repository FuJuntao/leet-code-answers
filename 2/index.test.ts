import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { arrayToListNode } from "../ListNode.ts";
import { addTwoNumbers } from "./index.ts";

Deno.test("[0] + [0] should equal [0]", () => {
  const l1 = arrayToListNode([0]);
  const l2 = arrayToListNode([0]);
  const result = addTwoNumbers(l1, l2);

  assertEquals(result, arrayToListNode([0]));
});

Deno.test("[5] + [5] should equal [0, 1]", () => {
  const l1 = arrayToListNode([5]);
  const l2 = arrayToListNode([5]);
  const result = addTwoNumbers(l1, l2);

  assertEquals(result, arrayToListNode([0, 1]));
});
