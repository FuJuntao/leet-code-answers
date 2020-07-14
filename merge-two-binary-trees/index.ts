import { TreeNode } from "../TreeNode.ts";

export function mergeTrees(
  t1: TreeNode | null,
  t2: TreeNode | null
): TreeNode | null {
  if (t1 === null && t2 === null) {
    return null;
  }

  const treeNode = new TreeNode();
  treeNode.val = (t1?.val ?? 0) + (t2?.val ?? 0);
  treeNode.left = mergeTrees(t1?.left ?? null, t2?.left ?? null);
  treeNode.right = mergeTrees(t1?.right ?? null, t2?.right ?? null);

  return treeNode;
}
