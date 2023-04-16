console.log('这样输出');

const arg1 = process.argv;
console.log('接受到的参数有',arg1);
setTimeout(() => {
  console.log('延时函数触发');
  // 清空控制台
  console.clear();
  // 显示调用栈
  console.trace();
  console.log('延时函数结束');

}, 3000);