import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { ListNode } from "../ListNode.ts";
import { reverseList, reverseListByIterating } from "./index.ts";

Deno.test("Should revert the linked list", () => {
  const listNode = new ListNode(
    2,
    new ListNode(4, new ListNode(1, new ListNode(9)))
  );
  const result = new ListNode(
    9,
    new ListNode(1, new ListNode(4, new ListNode(2)))
  );

  assertEquals(reverseList(listNode), result);
});

Deno.test("Should revert the linked list by iterating", () => {
  const listNode = new ListNode(
    2,
    new ListNode(4, new ListNode(1, new ListNode(9)))
  );
  const result = new ListNode(
    9,
    new ListNode(1, new ListNode(4, new ListNode(2)))
  );

  assertEquals(reverseListByIterating(listNode), result);
});
