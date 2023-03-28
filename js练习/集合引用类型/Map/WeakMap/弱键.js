// WeakMap 中的weak指的是其中的键引用不会阻止垃圾回收
let wm  = new WeakMap();
wm.set({},'v1'); // 这个键在语句结束后就会由于没有有效引用而清除
let keys = {
  key:{}
};
wm.set(keys.key,'v1');
console.log(wm.get(keys.key));// 'v1'
keys.key = null;
console.log(wm.get(keys.key));// undefined

// 因为 WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。也没有一次清除所有键值对的方法。
// WeakMap 实例之所以限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值。

