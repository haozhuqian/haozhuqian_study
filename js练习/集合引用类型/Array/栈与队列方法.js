// 数组中的一些方法可以像操作栈或者队列一样操作数组。
let stack = [];
console.log(stack.push('a','b'));// 2
console.log(stack);// ['a','b']
console.log(stack.push('c','d'));// 4

console.log(stack.pop());// 'd'
console.log(stack.length);// 3

let queue = [];
queue.push('a','b');
console.log(queue.shift());// a
console.log(queue.length);// 1

let reStack = [];
console.log(reStack.unshift('a','b'));// 2
console.log(reStack.shift());// 'a'
