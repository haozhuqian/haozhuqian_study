// 判断一个对象是否是一个数组？
// 当只有一个全局作用域时，使用instanceof足矣
let value;
if (value instanceof Array){  /* 操作数组*/  }

// 但如果将一个框架中的数组传递到另一个框架内，将会有两个不同版本的Array对象，不能通过instanceof判断，这时应该使用Array.isArray()方法。
if (Array.isArray(value)){  /*操作数组*/ }