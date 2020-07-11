import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ListNode } from "../ListNode.ts";
import { addTwoNumbers, arrayToListNode, listNodeToArray } from "./index.ts";

Deno.test("List node and array transformations", () => {
  const array = [1, 2, 3];
  const listNode: ListNode = {
    val: 1,
    next: { val: 2, next: { val: 3, next: null } },
  };

  assertEquals(arrayToListNode(array), listNode);
  assertEquals(listNodeToArray(listNode), array);
});

Deno.test("Plus two list nodes", () => {
  assertEquals(addTwoNumbers(arrayToListNode([0]), arrayToListNode([0])), [0]);

  assertEquals(addTwoNumbers(arrayToListNode([5]), arrayToListNode([5])), [
    1,
    0,
  ]);
});
