const smallA = [];
const smallM = new Map();
const overSize = 10000;
const size = 1000;

for (let i = 0; i < size; i++) {
  smallA[i + overSize] = i;
  smallM.set(i + overSize, i);
}

let s = performance.now();

for (let i = 0; i < size; i++) {
  smallA[i + overSize] = i;
  smallA[i] = i;
}

console.log(`大小为${size}的数组的添加元素平均用时 ${(performance.now() - s) / size}ms`);



s = performance.now();

for (let i = 0; i < size; i++) {
  smallM.set(i + overSize, i);
  smallM.set(i, i);
}

console.log(`大小为${size}的哈希表查找元素平均用时 ${(performance.now() - s) / size}ms`);



s = performance.now();

for (let i = 0; i < size; i++) {
  smallA[i + overSize];
}

console.log(`大小为${size}的数组的查找元素平均用时 ${(performance.now() - s) / size}ms`);



s = performance.now();

for (let i = 0; i < size; i++) {
  smallM.get(i);
}
console.log(`大小为${size}的哈希表查找元素平均用时 ${(performance.now() - s) / size}ms`);

// console.log( process.memoryUsage().rss)