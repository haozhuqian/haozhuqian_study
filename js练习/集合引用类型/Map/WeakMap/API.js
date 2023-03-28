let wm = new WeakMap();
// 弱映射中的键只能是 Object 或者继承自 Object 的类型
// 尝试使用非对象设置键会抛出 TypeError
// 构造函数可以接收一个可迭代对象，其中需要包含键/值对数组。
let id = 1;
let keys = ()=>{return {id:id++}}
let key1 = keys();
let key2 = keys();
let key3 = keys();
wm = new WeakMap([
  [key1,'v1'],
  [key2,'v2'],
  [key3,'v3'],
]);
console.log(wm.get(key1));// 'v1'

// 只要有一个键无效就会抛出错误，导致整个初始化失败
wm = new WeakMap([
  [key1,'v1'],
  [id,'v2'],
  [key3,'v3'],
])
// TypeError: Invalid value used as weak map key
// set,get delete 操作与Map相同