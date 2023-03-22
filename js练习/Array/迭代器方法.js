// keys(),values(),entries(),三个数组方法可以检测数组内容。
// keys()方法返回数组索引的迭代器
// values()方法返回数组元素迭代器
// entries()方法返回键值对迭代器
const chars = ['a','b','c','d','e'];
console.log(Array.from(chars.keys()));// [ 0, 1, 2, 3, 4 ]
console.log(Array.from(chars.values()));// [ 'a', 'b', 'c', 'd', 'e' ]
console.log(Array.from(chars.entries()));//  [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ], [ 4, 'e' ] ]

for(const [key,value] of chars.entries()){
  console.log(key);
  console.log(value);
}
// 0
// a
// 1
// b
// 2
// c
// 3
// d
// 4
// e