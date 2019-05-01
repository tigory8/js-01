//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var minEl = args[0];
    for (var i = 1; i < args.length; i++) {
      var el = args[i];
      if (el < minEl) {
        minEl = el;
      }
    }
    return minEl;
  }
}