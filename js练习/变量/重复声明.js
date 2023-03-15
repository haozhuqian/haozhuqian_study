var a;
console.log(a); // undefined
a = 1;
console.log(a); // 1
var a;
console.log(a); // 1
var a = 2;
console.log(a); // 2

// var 关键字可以重复声明，单纯的声明不会重置原有的值，重新声明赋值可以覆盖原有的值。

let b;
console.log(b); // undefined
b = 2;
console.log(b); // 2
let b; // SyntaxError: Identifier 'b' has already been declared
var b; // SyntaxError: Identifier 'b' has already been declared
const b = 2; // SyntaxError: Identifier 'b' has already been declared

// var 关键字声明的变量不可以被任何关键字重新声明。

const c; // SyntaxError: Missing initializer in const declaration
const c = 3;
console.log(c); // 3
c=2; // TypeError: Assignment to constant variable.
var c; // SyntaxError: Identifier 'c' has already been declared
let c; // SyntaxError: Identifier 'c' has already been declared
