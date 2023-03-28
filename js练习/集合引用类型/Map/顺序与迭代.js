// Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作
// 映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。可以
// 通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器：

const m = new Map([
  ['key1','value1'],
  ['key2','value2'],
  ['key3','value3']
]);
console.log(m.entries === m[Symbol.iterator]);// true
for(const ky of m.entries()){
  console.log(ky);
}
// [ 'key1', 'value1' ]
// [ 'key2', 'value2' ]
// [ 'key3', 'value3' ]

//可以对Map实例进行扩展操作，转换为数组
console.log([...m]);// [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
// 如果不使用迭代器，而是使用回调方式，则可以调用映射的 forEach(callback, opt_thisArg) 方法并传入回调，依次迭代每个键/值对。
// 传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值：

m.forEach((val,key)=>{console.log(`${val},${key}`);})
// value1,key1
// value2,key2
// value3,key3

for(let key of m.keys()){
  console.log(key);
}
// key1
// key2
// key3
for(let value of m.values() ){
  console.log(value);
}
// value1
// value2
// value3

// 在高频插入删除操作下，Map 性能优于 object
// 但在大型 Object 和 Map 中查找键值对性能差异不大
// 对于把 object 当成数组用的情况下，浏览器会对搜索进行优化，在内存中实现更为高效的布局，
// map 储存相同数量的键值对，相比 object 少约 50% 内存