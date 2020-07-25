import { ListNode } from "../ListNode.ts";

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  const reversedHeadNext = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHeadNext;
}

export function reverseListByIterating(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
