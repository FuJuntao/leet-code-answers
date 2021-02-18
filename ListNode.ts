export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toArray() {
    const array: number[] = [];
    const pushValueToArray = (node: ListNode, array: number[]) => {
      if (node.val !== null) {
        array.push(node.val);
      }
      if (node.next !== null) {
        pushValueToArray(node.next, array);
      }
    };
    pushValueToArray(this, array);
    return array;
  }
}

export function toListNode(array: number[]) {
  if (array.length === 0) {
    throw new Error("Can not convert empty array");
  }

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
