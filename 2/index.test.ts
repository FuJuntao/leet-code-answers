import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { toListNode } from "../ListNode.ts";
import { addTwoNumbers } from "./index.ts";

Deno.test("[0] + [0] should equal [0]", () => {
  const l1 = toListNode([0]);
  const l2 = toListNode([0]);
  const result = addTwoNumbers(l1, l2);

  assertEquals(result, toListNode([0]));
});

Deno.test("[5] + [5] should equal [0, 1]", () => {
  const l1 = toListNode([5]);
  const l2 = toListNode([5]);
  const result = addTwoNumbers(l1, l2);

  assertEquals(result, toListNode([0, 1]));
});
