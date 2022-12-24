function fact(n) {
  if (n == 0 || n == 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(3)); //3*2*1
//[1,2,3] 1*2*3=6
function productOfArray(arr) {
  if (arr.length == 0) return 1;
  return arr.pop() * productOfArray(arr);
}
console.log(productOfArray([1,2,3,4]));