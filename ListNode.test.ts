import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { arrayToListNode, ListNode } from "./ListNode.ts";

Deno.test("array should be able to be converted to list node", () => {
  const array = [1, 2, 3];
  const listNode = new ListNode(1, new ListNode(2, new ListNode(3)));

  assertEquals<ListNode>(arrayToListNode(array), listNode);
});

Deno.test("list node should be able to be converted to array", () => {
  const listNode = new ListNode(1, new ListNode(2, new ListNode(3)));
  const array = [1, 2, 3];

  assertEquals<number[]>(listNode.toArray(), array);
});
