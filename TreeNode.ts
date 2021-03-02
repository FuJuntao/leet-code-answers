export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function toTreeNode(array: (number | null)[]): TreeNode {
  const getTreeNode = (index: number): TreeNode | null => {
    const val = array[index];

    if (val === null) return null;

    const leftIndex = index * 2 + 1;
    const rightIndex = leftIndex + 1;
    return new TreeNode(
      val,
      leftIndex >= array.length ? null : getTreeNode(leftIndex),
      rightIndex >= array.length ? null : getTreeNode(rightIndex)
    );
  };

  if (array.length <= 0 || array[0] === null) {
    throw new Error("Invalid Array");
  }

  const root = new TreeNode(array[0]);
  root.left = getTreeNode(1);
  root.right = getTreeNode(2);

  return root;
}
