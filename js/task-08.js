//https://www.codewars.com/kata/training-js-number-8-conditional-statement-switch/train/javascript

function howManydays(month) {
  var days;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      var days = 30;
      break;
    case 2:
      var days = 28;
      break;
    default:
      var days = 31;
      break;
  }
  return days;
}