function getLength(arr){
  const arrayLength = arr.length;//return length of arr
  return arrayLength;
}
function getFirst(arr){
  const arrayFirst = arr[0];//return the first element of arr
  return arrayFirst;
}
function getLast(arr){
  const arrayLast = arr[arr.length-1];//return the last element of arr
  return arrayLast;
}
function pushElement(arr){
  var el=1;
  arr.push(el);//push el to arr
  return arr;
}
function popElement(arr){
  //pop an element from arr
  const arrayPop = arr.pop();
  return arr;
}