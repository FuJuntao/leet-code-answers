export function lengthOfLongestSubstring(s: string): number {
  let longestSubstringLength = 0;
  let currentString = "";

  for (let i = 0; i < s.length; i += 1) {
    const currentLetter = s[i];
    const duplicatedLetterIndexAtCurrentString = currentString.indexOf(
      currentLetter
    );

    if (duplicatedLetterIndexAtCurrentString > -1) {
      currentString =
        currentString.slice(duplicatedLetterIndexAtCurrentString + 1) +
        currentLetter;
    } else {
      currentString = currentString + currentLetter;
    }

    if (currentString.length > longestSubstringLength) {
      longestSubstringLength = currentString.length;
    }
  }

  return longestSubstringLength;
}
