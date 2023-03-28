// 利用array构造函数
let colors;
colors = new Array();

// 也可以不加new操作符，结果一样的。
colors = Array();

// 构造函数中可以传参
colors = new Array(10);
// 创建了一个长度为10的数组。

colors = new Array('red', 'green', 'blue');
console.log(colors);// [ 'red', 'green', 'blue' ]
// 根据参数创建数组

// 或者按照数组字面量创建
colors = [ 'red', 'green', 'blue' ];
colors = [];

// Array 还有from和of两个静态方法可以构造数组
console.log(Array.from('red'));// [ 'r', 'e', 'd' ]

const m = new Map().set(1,2).set(3,4);
console.log(Array.from(m));// [ [ 1, 2 ], [ 3, 4 ] ]

const arr = [1,2,3,4];
console.log(Array.from(arr) === arr);// false