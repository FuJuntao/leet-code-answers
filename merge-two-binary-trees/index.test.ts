import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { TreeNode } from "../TreeNode.ts";
import { mergeTrees } from "./index.ts";

Deno.test("Should merge two tree nodes correctly", () => {
  const t1 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2));
  const t2 = new TreeNode(
    2,
    new TreeNode(1, null, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(7))
  );
  const result = new TreeNode(
    3,
    new TreeNode(4, new TreeNode(5), new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(7))
  );

  assertEquals(mergeTrees(t1, t2), result);
});
