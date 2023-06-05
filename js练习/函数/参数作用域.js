// 参数作用域的近似
// 相当于在一个函数内用let关键字逐个声明并返回声明的变量
// 这样实际实现了一个闭包
// 然后用var关键字在原本的函数内 逐个把闭包函数返回的同名变量获取

function a() {
  var { x, y } = (() => {
    let x = 4;
    let y = function () {
      x = 3;
      console.log(x);
    };
    return { x, y };
  })();
  console.log(x);
  var x = 2;
  y();
  console.log(x);
}

function f(
  x = 4,
  y = function () {
    x = 3;
    console.log(x);
  }
) {
  console.log(x);
  var x = 2;
  y();
  console.log(x);
}

f();//函数参数作用域原有实现
console.log("");
a();//近似实现
