// 使用new关键字和Map构造函数可以创建一个空映射
let m = new Map();
// 如果想要在初始化时直接赋值，可以传入一个可迭代对象，需要包含键值对数组，他们会被按顺序插入到新映射实例中
m = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
console.log(m.size); // 3

m = new Map([[]]);
console.log(m.size); // 1
console.log(m.has(undefined));// true
console.log(m.get(undefined));// undefined

//set方法添加键值对，has方法进行查询，get方法获取值，size属性获取映射中键值对的数量，delete和clear方法删除值。
m = new Map();
console.log(m.has(undefined));// false
console.log(m.size);// 0

m.set('key1','value1').set('key2','value2');
console.log(m.size);// 2
console.log(m.get('key1'));// value1
console.log(m.get('key2'));// value2



