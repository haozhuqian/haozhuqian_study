let s = new Set();
// 如果想在创建的同时初始化实例，则可以给 Set 构造函数传入一个可迭代对象，其中需要包含插入到新集合实例中的元素：
s = new Set(['v1','v2','v3','v4','v5']);
console.log(s.size);// 5
// 初始化之后，可以使用 add() 增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete() 和 clear()删除元素：
s.add('v6');// 返回集合实例
s.add('v6');// 不会报错，已有的值不会重复添加
console.log(s.has('v1'));// true
console.log(s.delete('v1')); // true
console.log(s.delete('v0')); // false
s.clear();
console.log(s.size);// 0
// 集合也使用类似严格对象相等的标准检查值的匹配性
// add()和 delete()操作是幂等的。delete()返回一个布尔值，