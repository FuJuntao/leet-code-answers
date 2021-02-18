import { assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { replaceSpace } from "./index.ts";

Deno.test("Should replace space", () => {
  assertStrictEquals(replaceSpace("We are happy."), "We%20are%20happy.");
});
