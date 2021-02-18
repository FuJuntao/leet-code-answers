import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { arrayToListNode } from "../ListNode.ts";
import { reversePrint } from "./index.ts";

Deno.test("Should return reversed list node as array", () => {
  assertEquals(reversePrint(arrayToListNode([1, 3, 2])), [2, 3, 1]);
});
