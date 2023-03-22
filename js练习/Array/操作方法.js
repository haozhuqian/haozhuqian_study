// concat()方法可以创建一个数组副本，不影响原数组。
let ints1 = [1,2,3];
let ints2 = ints1.concat(4,[5,6]);
console.log(ints2);// [ 1, 2, 3, 4, 5, 6 ]
// 这里可以看到concat()方法可以打平一层数组，打平数组的行为可以重写。
ints2 = [4,5,6];
let ints3 = [4,5,6];
ints3[Symbol.isConcatSpreadable] = false;

let ints = ints1.concat(ints3);
console.log(ints);// [ 1, 2, 3, [ 4, 5, 6 ]]
ints = ints1.concat(ints2);
console.log(ints);// [ 1, 2, 3, 4, 5, 6 ]

// slice(截断起始索引，截断终止索引)方法用于创建一个包含原有数组中一个或者多个元素的新数组，包含起始索引元素，不包含终止索引元素。不影响原数组。
ints2 = ints1.slice(1);
console.log(ints2);// [2,3]
ints2 = ints1.slice(1,2);
console.log(ints2);// [2]
// 如果 slice()的参数有负值，那么就以数值长度加上这个负值的结果确定位置。

// splice(起始删除索引，删除数量，在此处添加元素的列表)方法可以操作原数组，可以插入删除数组中的元素。它会返回从数组中删除的元素。
console.log(ints.splice(2,1,7,8,9));// [3]
console.log(ints);// [1,2,7,8,9,4,5,6]
