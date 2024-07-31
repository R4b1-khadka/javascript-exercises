const removeFromArray = function (givenArray, remove) {
  let newArray = [];
  for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] !== remove) {
      newArray.push(givenArray[i]);
    }
  }
  return newArray;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
