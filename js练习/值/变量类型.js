let value;
console.log(typeof value);// 'undefined'
value = undefined;
console.log(typeof value);// 'undefined'
value = 'some string';
console.log(typeof value);// 'string'
value = ()=>{};
console.log(typeof value);// 'function'
// typeof 会返回值的类型对应字符串，可能的值有七种：
// 'undefined'（未声明的变量与未赋值的变量都会返回此值）、'boolean'、'number'、'string'、’symbol'、'object'（表示非函数对象与null）、'function'。