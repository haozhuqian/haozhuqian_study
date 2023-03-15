for(var i=0;i<3;i++){
  console.log("in 'for' i = "+i);
}
// in 'for' i = 0
// in 'for' i = 1
// in 'for' i = 2
console.log("out of 'for' i = "+i);
// out of 'for' i = 3

// for 循环中用var声明的变量，会泄露到上层函数或全局作用域。

for(let j =0;j<3;j++){
  console.log("in 'for' j = "+j);
}
// in 'for' j = 0
// in 'for' j = 1
// in 'for' j = 2
// console.log("out of 'for' j = "+j); // ReferenceError: j is not defined
// for 循环中let声明变量不会泄露。

for(var x=0;x<3;x++){
  setTimeout(()=>{
    console.log("in 'for' x = "+x);
  },10)
}
// in 'for' x = 3
// in 'for' x = 3
// in 'for' x = 3
// 由于JavaScript在浏览器环境中单线程运行，异步操作（比如这里的setTimeout函数的回调）会在同步代码结束后执行，
// 此时x保留值为全局作用域中的3，所以每个回调函数都会输出3。

for(let y=0;y<3;y++){
  setTimeout(()=>{
    console.log("in 'for' y = "+y);
  },10)
}
// in 'for' y = 0
// in 'for' y = 1
// in 'for' y = 2
// let 声明会在每一次循环中创建一个新的变量，各个变量相互独立，
// 如果本次循环结束后，没有保留对该变量的引用，该变量就会销毁，
// 否则（例如此处延时执行的函数回调）将会保留每次循环块级作用域中的变量y，而回调函数中绑定的y就是相应循环中的变量y