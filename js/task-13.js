//task-13   https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n) {
 if (n === Number.MAX_VALUE) {
  return "Input number is Number.MAX_VALUE";
 }
 else if (n === Number.MIN_VALUE) {
  return "Input number is Number.MIN_VALUE";
 }
 else if (isNaN(n)) {
  return "Input number is Number.NaN";
 }
 else if (n > Number.MAX_VALUE) {
  return "Input number is Number.POSITIVE_INFINITY";
 }
 else if (n > 0 && n < Number.MAX_VALUE) {
  return "Input number is " + n;
 }
 else if (n < -Number.MAX_VALUE) {
  return "Input number is Number.NEGATIVE_INFINITY";
 }
}