const reverseString = function (str) {
  let splitString = str.split("");
  let reversedString = splitString.reverse();
  let joinReverse = reversedString.join("");
  return joinReverse;
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
