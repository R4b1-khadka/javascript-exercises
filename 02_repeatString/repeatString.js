const repeatString = function (StringValue, repetition) {
  if (repetition < 0) return "ERROR";
  else {
    let result = StringValue.repeat(repetition);
    return result;
  }
};
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
const number = Math.floor(Math.random() * 1000);
repeatString("odin", number);
repeatString("", 10);
// Do not edit below this line
module.exports = repeatString;
