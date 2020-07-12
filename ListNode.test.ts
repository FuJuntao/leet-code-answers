import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { arrayToListNode, ListNode, listNodeToArray } from "./ListNode.ts";

Deno.test("array should be able to be converted to list node", () => {
  const array = [1, 2, 3];
  const listNode: ListNode = {
    val: 1,
    next: { val: 2, next: { val: 3, next: null } },
  };

  assertEquals(arrayToListNode(array), listNode);
});

Deno.test("list node should be able to be converted to array", () => {
  const listNode: ListNode = {
    val: 1,
    next: { val: 2, next: { val: 3, next: null } },
  };
  const array = [1, 2, 3];

  assertEquals(listNodeToArray(listNode), array);
});
