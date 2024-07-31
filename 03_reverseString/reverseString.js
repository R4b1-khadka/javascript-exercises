// const reverseString = function (str) {
//   let splitString = str.split("");
//   let reversedString = splitString.reverse();
//   let joinReverse = reversedString.join("");
// //   or you can chain them all together return str.split("").reverse.Join("");
//   return joinReverse;

//    string reverse using for loop
const reverseString = function (str) {
  let stringLength = str.length();
  for (let i = stringLength; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};
// };
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
