import { ListNode } from "../ListNode.ts";

function reversePrint(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;
  while (current) {
    arr.unshift(current.val);
    current = current.next;
  }
  return arr;
}

export { reversePrint };
