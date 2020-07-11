import { ListNode } from "../ListNode.ts";

export function arrayToListNode(array: number[]) {
  const firstNode = new ListNode(array[0]);

  array.reduce((prev, curr, index) => {
    if (index === 0) return prev;
    const nextListNode = new ListNode();
    prev.next = nextListNode;
    nextListNode.val = curr;
    return nextListNode;
  }, firstNode);

  return firstNode;
}

export function listNodeToArray(listNode: ListNode) {
  let array = [];
  let index = 0;
  let currentListNode: ListNode | null = listNode;
  do {
    if (!currentListNode) break;
    array[index] = currentListNode.val;
    currentListNode = currentListNode.next;
  } while (listNode.next !== null);
  return array;
}

const decimal = 10;

let carry = 0;

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  }

  const listNode = new ListNode();

  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
  carry = sum >= decimal ? Math.floor(sum / decimal) : 0;
  const val = sum - carry * decimal;

  listNode.val = val;
  listNode.next = addTwoNumbers(l1?.next ?? null, l2?.next ?? null);

  return listNode;
}
