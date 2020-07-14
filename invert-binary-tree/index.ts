import { TreeNode } from "../TreeNode.ts";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const treeNode = new TreeNode();
  treeNode.val = root?.val ?? 0;
  treeNode.left = invertTree(root?.right ?? null);
  treeNode.right = invertTree(root?.left ?? null);
  return treeNode;
}
