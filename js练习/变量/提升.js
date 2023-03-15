console.log(a); // undefined
var a = 1;
console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined

// // var 关键字声明的变量即使在声明语句之前被访问也不会报错，而会返回 undefined。因为var声明在代码编译时会提前进行声明和初始化赋值。

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// console.log(d); // ReferenceError: Cannot access 'c' before initialization
// let c = 2;
// const d = 3;
// console.log(c);
// console.log(d);

// let 与 const 关键字声明的变量不可以在声明语句前访问，因为let声明在编译前仅会进行提前声明而不会初始化赋值。
var e = 4;
(() => {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  console.log(e); // ReferenceError: Cannot access 'e' before initialization
  let a = 2;
  const e = 2;
  console.log(a);
  console.log(e);

  // 虽然 let 与 const 关键字声明的变量不可以在声明语句前访问，但由于已经在定义域中提前（编译前）进行了声明，所以仍然会屏蔽父作用域中的同名变量。
})();
