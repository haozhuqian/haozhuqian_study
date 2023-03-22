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