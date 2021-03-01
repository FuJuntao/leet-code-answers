import { assertStrictEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { TreeNode } from "../TreeNode.ts";
import { maxDepth } from "./index.ts";

Deno.test("should return the maximum depth of binary tree", () => {
  const treeNode = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(15)))
  );

  assertStrictEquals(maxDepth(treeNode), 4);
});
