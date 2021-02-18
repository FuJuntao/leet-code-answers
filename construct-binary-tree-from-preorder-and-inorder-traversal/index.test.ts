import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { buildTree } from "./index.ts";
import { TreeNode } from "../TreeNode.ts";

Deno.test(
  "Should build tree correctly according to preorder and inorder",
  () => {
    assertEquals(
      buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]),
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      )
    );
  }
);
