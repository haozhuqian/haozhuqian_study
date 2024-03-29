// 数组中有两个方法可以对其重新排序，反向排序方法reverse()与sort()方法,这两个方法都会返回排序后的原数组引用
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]

// sort方法更加灵活，默认情况下它会让数组元素升序排列
arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 但实际上的比较是将每一项上都调用toString()方法后比较字符串来决定顺序，所以有时候不会得到想要的结果
arr = [1, 5, 10, 15, 20];
console.log(arr.sort()); // [ 1, 10, 15, 20, 5 ]

// sort()函数可以接受一个比较函数作为参数
// 比较函数有两个参数，如果第一个参数应该在第二个参数前，则返回负值，相等，则返回0，否则返回正值。
let compare = (v1, v2) => {
  return v1 - v2;
};
arr = [1, 5, 10, 15, 20];
console.log(arr.sort(compare)); // [ 1, 5, 10, 15, 20 ]