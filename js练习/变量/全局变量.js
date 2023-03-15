(()=>{
  let a = 1;
  const b = 2;
  (()=>{
    console.log("let's a = " + a); // 1
    console.log("let's b = " + b); // 2
    console.log(
      typeof window !== "undefined"
        ? "in browser window.a = " + window.a
        : "in nodejs global.a = " + global.a
    ); // undefined
    console.log(
      typeof window !== "undefined"
        ? "in browser window.b = " + window.b
        : "in nodejs global.b = " + global.b
    ); // undefined
  })();
})();
// let 与 const 关键字声明的变量不会绑定在全局对象（浏览器中为 window ，nodejs 中为 global）中作为属性，也就无法借此访问。
var a = 1;
(()=>{
  console.log("var's a = " + a); // 1
  console.log(
    typeof window !== "undefined"
      ? "in browser window.a = " + window.a
      : "in nodejs global.a = " + global.a
  ); // undefined
})()
// var 关键字声明的变量在浏览器运行环境中可以被 window 对象访问，但nodejs中运行时不可以通过 global 对象访问。
