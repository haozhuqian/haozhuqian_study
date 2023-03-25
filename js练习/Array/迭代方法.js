// 数组定义了 5 个迭代方法。每个方法接收两个参数：以每一项为参数运行的函数，以及可选的作为函数运行上下文的作用域对象（影响函数中 this 的值）
// 传给每个方法的函数接收 3个参数：数组元素、元素索引和数组本身。
// every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
// some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。
// filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
// map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
// forEach()：对数组每一项都运行传入的函数，没有返回值。
// 这些方法都不改变调用它们的数组。
let num =[1,2,3,4,3,2,1];
console.log(num.every((item,index,array)=>item<5));// true
console.log(num.every((item,index,array)=>item<4));// false
console.log(num.some((item,index,array)=>item<0));// false
console.log(num.some((item,index,array)=>item<4));// true

console.log(num.filter((item,index,array)=>item<3));// [ 1, 2, 2, 1 ]
console.log(num.map((item,index,array)=>item+index));// [ 1, 3, 5, 7, 7, 7, 7 ]

console.log(num.forEach((item,index,array) => {console.log(item+','+index);}));// undefined
// 1,0
// 2,1
// 3,2
// 4,3
// 3,4
// 2,5
// 1,6
