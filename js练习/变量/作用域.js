// const 与 let 关键字除了前者必须声明时赋值并且后续不能修改其值外其他性质相同，在此不会再重复展示const。
var v_a = 1;
let l_a = 2;
(()=>{
console.log("v_a = "+v_a); // v_a = 1
console.log("l_a = "+l_a); // l_a = 2
  (()=>{
    console.log("v_a = "+v_a); // v_a = 1
    console.log("l_a = "+l_a); // l_a = 2
  })()
// 函数可以访问函数定义时的父作用域链中的变量，
})();
(()=>{
  var v_b = 3;
  let l_b = 4;
})()
// console.log(v_b); // ReferenceError: v_b is not defined
// console.log(l_b); // ReferenceError: v_b is not defined
// 函数定义域内定义的任何变量都不能被直接访问。
if(true){
  var v_c = 5;
  let l_c = 6;
}
console.log("v_c = "+v_c); // v_c = 5
console.log("l_c = "+l_c); // eferenceError: l_c is not defined
// 在if语句块中的var定义实际存在于全局，但let仅存在于if语句的作用域内（事实上只要是一对花括号就可以建立束缚 let 的块作用域了），
// var 定义只会被函数作用域与全局作用域束缚。