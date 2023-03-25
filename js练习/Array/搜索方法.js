// ECMAScript 提供两类搜索数组的方法：按严格相等搜索和按断言函数搜索。
// 严格相等搜索方法有 indexOf()、lastIndexOf()与includes()，
// 都接收两个参数：要查找的元素和一个可选的起始搜索位置
// 比较时使用严格相等（===）
let num = [1,2,3,4,5,4,3,2,1];
console.log(num.indexOf(2));// 1
console.log(num.lastIndexOf(2));// 7
console.log(num.includes(2));// true

console.log(num.indexOf(0));// -1
console.log(num.lastIndexOf(0));// -1
console.log(num.includes(0));// false

console.log(num.indexOf(2,2));// 7
console.log(num.lastIndexOf(2,-3));// 1
console.log(num.includes(2,2));// true

// 断言函数接受三个参数，元素，索引，数组本身
// 断言函数会返回真值，表示匹配
// find() 和 findIndex() 就是通过断言函数搜索的，find返回第一个匹配元素，findIndex() 返回第一个匹配的元素索引
// 这两个函数也接受第二个参数作为函数的this值。
// 找到匹配项后，这两个方法都不再继续搜索。
let people = [{
  name : 'lisa',
  age : 9,
},
{
  name: 'matt',
  age : 20,
}]

console.log(people.find((element,index,array)=>element.age < 10));// { name: 'lisa', age: 9 }
console.log(people.findIndex((element,index,array)=>element.age > 10));// 1
