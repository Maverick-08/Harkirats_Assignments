/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = [];
  for (let char of str) {
    if (char == "," || char == " " || char == "!" || char == "." || char=="?") {
      continue;
    } else {
      arr.push(char.toLowerCase());
    }
  }
  for (let i = 0; i < arr.length; ++i) {
    let e = arr.length - 1 - i;
    if (arr[i] != arr[e]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
