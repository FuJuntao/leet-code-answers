import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { TreeNode } from "../TreeNode.ts";
import { invertTree } from "./index.ts";

Deno.test("tree node should be inverted", () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  );
  const result = new TreeNode(
    4,
    new TreeNode(7, new TreeNode(9), new TreeNode(6)),
    new TreeNode(2, new TreeNode(3), new TreeNode(1))
  );

  assertEquals(invertTree(root), result);
});
