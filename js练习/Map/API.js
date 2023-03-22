// 使用new关键字和Map构造函数可以创建一个映射（Map）
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
console.log(m.has(undefined)); // true
console.log(m.get(undefined)); // undefined

//set方法添加键值对，has方法进行查询，get方法获取值，size属性获取映射中键值对的数量，delete和clear方法删除值。
m = new Map();
console.log(m.has(undefined)); // false
console.log(m.size); // 0

// set()方法返回映射实例，因此可以把多个操作连缀起来
m.set("key1", "value1").set("key2", "value2");
console.log(m.size); // 2
console.log(m.has("key1")); // true
console.log(m.get("key1")); // value1
console.log(m.get("key2")); // value2

console.log(m.delete("key1")); // true
console.log(m.size);// 1
console.log(m.delete("key1")); // false
console.log(m.has("key1")); // false

m.clear();
console.log(m.size);// 0

// 映射的值与键可以是任意类型的，Map内部使用相当于严格对象相等的标准来检查键的匹配性。
const fun = ()=>{};
const sym = Symbol();
const obj = {};

m.set(fun,'fun').set(sym,'sym').set(obj,'obj')
console.log(m.size);
console.log(m.get(fun));// fun
console.log(m.get(()=>{}));// undefined
console.log(m.get(obj));// obj
obj.key = 'value'
console.log(m.get(obj));// obj

const a = NaN,b = NaN,pz = +0; nz = -0;
console.log(a === b);// false
console.log(pz === nz);// true
m.set(a,'a').set(b,'b').set(pz,'pz').set(nz,'nz');
console.log(m.get(a));// b
console.log(m.get(pz));// nz
m.clear();
