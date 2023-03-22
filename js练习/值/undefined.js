// 当变量没有初始化时，会默认赋值undefined。
// 这与未定义的变量不同，引用后者时会报错
let value;
console.log(value); // undefined
console.log(notValue); // ReferenceError: notValue is not defined