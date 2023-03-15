if(true) var a = 1;
// var 关键字本身不会在if语句内产生作用域，此处相当于声明了一个全局变量
if(true) let a = 2;
if(true) const a = 2;
// SyntaxError: Lexical declarations cannot occur in a single-statement context
// 语法错误：词法声明不能出现在单语句上下文中
//// 这种写法本来就没什么意义罢了