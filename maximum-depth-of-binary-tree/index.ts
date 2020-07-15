import { TreeNode } from "../TreeNode.ts";

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let leftDepth = 1;
  let rightDepth = 1;

  if (root?.left) leftDepth += maxDepth(root.left);
  if (root?.right) rightDepth += maxDepth(root.right);

  return Math.max(leftDepth, rightDepth);
}
