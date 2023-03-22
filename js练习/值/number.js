// 整数默认使用十进制，0前缀表示八进制（严格模式会报错）
// 0o前缀表示八进制，0x前缀表示十六进制数（严格模式也不会报错）。
// 由于js保存数值的机制，可能会出现+0与-0，但这两个数任何情况都被认为相等。
let intNum = 55; // 整数
let octalNum3 = 08; // 无效的八进制值，当成 8 处理
let octalNum1 = 0o70; // 八进制的 56
let hexNum1 = 0xA; // 十六进制 10 
let hexNum2 = 0x1f; // 十六进制 31

// 定义浮点数必须有小数点以及小数点后一位数字。
let floatNum1 = 0.1; 
let floatNum2 = 0.2; 
let floatNum3 = .1; // 有效，但不推荐
// 浮点数的储存需要整数的两倍内存空间，所以js会尽可能将值转换为整数
let floatNum4 = 1.; // 小数点后面没有数字，当成整数 1 处理
let floatNum5 = 10.0; // 小数点后面是零，当成整数 10 处理
// 对于非常大或非常小的数值，浮点值可以用科学记数法来表示。
let floatNum = 3.125e7; // 等于 31250000
// 浮点数的计算精度远不如整数。
if(floatNum1 + floatNum2 == 0.3){
  console.log('0.1 + 0.2 == 0.3');
}else{
  console.log('0.1 + 0.2 != 0.3');
}
// 永远不要测试某个特定的浮点值。

// js的数值有它的范围可以表示的最小数值保存在 Number.MIN_VALUE 中，可以表示的最大数值保存在Number.MAX_VALUE 中
// 如果计算结果超出了可以表示的范围，则负数会返回-Infinity，正数返回Infinity。
// 这两个值不能用于进一步计算，需要判断一个值是否有穷应当用 isFinite() 函数
let result = Number.MAX_VALUE + Number.MAX_VALUE; 
console.log(isFinite(result)); // false
// 使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取正、负 Infinity。

// NaN是特殊的数，表示'Not a Number'，表示在试图返回一个数字时失败了。
console.log(2/'w'); // NaN
console.log(0/0); // NaN
// 任何涉及 NaN 的操作始终返回 NaN
console.log(NaN*0); // NaN
// 为此，ECMAScript 提供了 isNaN()函数。参数不能转换为正常数值时返回true
console.log(isNaN(NaN)); // true
console.log(isNaN("blue")); // true
console.log(isNaN("Infinity")); // false