let chars = ["a", "b", "c"];
console.log(chars[0]); // 'a'
chars[1] = "d"; // 修改第二项
chars[4] = "e"; // 添加第四项

// 数组中的元素数量保存在length属性中，这个属性始终返回大于等于0
console.log(chars.length);// 4
// 可以直接修改length属性，在数组末尾删除或者追加元素
//chars.length = -1;// RangeError: Invalid array length
chars.length = 6;
console.log(chars);// [ 'a', 'd', 'c', undefined , 'e', undefined ]
chars.length = 2;
console.log(chars);// [ 'a', 'd' ]

//使用 length 属性可以方便地向数组末尾添加元素
chars[chars.length] = 'c'
console.log(chars);// [ 'a', 'd', 'c' ]

// 数组最多可以包含 4 294 967 295 个元素，