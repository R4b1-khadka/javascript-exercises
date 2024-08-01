const removeFromArray = function (givenArray, ...remove) {
  let newArray = [];
  givenArray.forEach((item) => {
    if (!remove.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
