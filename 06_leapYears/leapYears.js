const leapYears = function (getYear) {
  if (getYear % 100 == 0) {
    if (getYear % 400 == 0) return true;
    else return false;
  } else if (getYear % 4 == 0) return true;
  else return false;
};
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
