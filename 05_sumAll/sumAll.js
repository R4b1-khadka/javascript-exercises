const sumAll = function (startIndex, endIndex) {
  let j = 0;

  if (startIndex > endIndex) {
    let temp = startIndex;
    startIndex = endIndex;
    endIndex = temp;
  } else if (startIndex < 0 || endIndex < 0) return "ERROR";
  else if (!Number.isInteger(startIndex) || !Number.isInteger(endIndex))
    return "ERROR";
  for (let i = startIndex; i <= endIndex; i++) {
    j = j + i;
  }
  return j;
};
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 1);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
