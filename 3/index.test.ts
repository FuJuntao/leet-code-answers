import { assertStrictEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { lengthOfLongestSubstring } from "./index.ts";

Deno.test(
  "'abcabcbb's longest non-repetitive substring's length should be 3",
  () => {
    assertStrictEquals(lengthOfLongestSubstring("abcabcbb"), 3);
  }
);

Deno.test(
  "'dvdfd''s longest non-repetitive substring's length should be 3",
  () => {
    assertStrictEquals(lengthOfLongestSubstring("dvdfd"), 3);
  }
);
