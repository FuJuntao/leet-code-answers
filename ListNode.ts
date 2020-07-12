export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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
  let currentListNode: ListNode | null = listNode;
  do {
    if (!currentListNode) break;
    array.push(currentListNode.val);
    currentListNode = currentListNode.next;
  } while (listNode.next !== null);
  return array;
}
