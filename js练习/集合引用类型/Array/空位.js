// 使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。
let arr = [,,,,,];
console.log(arr.length);// 5

// es6 新增方法会将这些空位当成undefined，但早期方法会有不一样的行为
const options = [1,,,,5];
// map()会跳过空位置
console.log(options.map(() => 6)); // [ 6, <3 empty items>, 6 ]
// join()视空位置为空字符串
console.log(options.join('-')); // "1----5"
