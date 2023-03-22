// Number()、parseInt()和 parseFloat()可以将非数值转换为数值
// Number()是转型函数，可用于任何数据类型。其他两个主要用于字符串
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(false));// 0

console.log(Number('-0123'));// -123
console.log(Number('-00.1'));// -0.1
console.log(Number('0o17'));// 15
console.log(Number('0x1f'));// 31
console.log(Number(''));// 0
console.log(Number('null'));// NaN
//参数为对象时，调用 valueOf() 方法如果转换结果是 NaN，再调用 toString() 方法尝试转换。

