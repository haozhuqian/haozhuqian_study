let s = new Set(['v1','v2','v3']);
// 集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。
// 可以通过 values()方法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器：
for(let key of s.keys()){
  console.log(key);
}
// v1
// v2
// v3
for(let value of s.values()){
  console.log(value);
}
// [ 'v1', 'v1' ]
// [ 'v2', 'v2' ]
// [ 'v3', 'v3' ]
for(let value of s.entries()){
  console.log(value);
}
// 集合的 entries()方法返回一个迭代器，可以按照插入顺序产生包含两个元素的数组，这两个元素是集合中每个值的重复出现：
// 如果不使用迭代器，而是使用回调方式，则可以调用集合的 forEach()方法并传入回调，
// 依次迭代每个键/值对。传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值：
s.forEach((val,dupVal)=>{console.log(val+','+dupVal)});
// v1,v1
// v2,v2
// v3,v3