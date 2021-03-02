import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { TreeNode, toTreeNode } from "./TreeNode.ts";

Deno.test("array should be able to be converted to tree node", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, null, 9, null, 11, 12, 13, 14];
  const treeNode = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, null, new TreeNode(9)),
      new TreeNode(5, null, new TreeNode(11))
    ),
    new TreeNode(
      3,
      new TreeNode(6, new TreeNode(12), new TreeNode(13)),
      new TreeNode(7, new TreeNode(14))
    )
  );

  assertEquals(toTreeNode(array), treeNode);
});
