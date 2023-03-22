// 所有对象都有 toLocaleString()、toString()和 valueOf()方法。
// 数组对象的valueOf()会返回数组本身，
// toString()方法会返回由数组中每个值的等效字符串拼接而成的由逗号分隔的字符串。也就是说，对数组的每个值都会调用其 toString()方法，以得到最终的字符串。
let chars = ['a','b','c'];
console.log(chars.toString());// a,b,c
console.log(chars.valueOf());// [ 'a', 'b', 'c' ]
console.log(chars);// [ 'a', 'b', 'c' ]
// 调用数组的 toLocaleString()方法时，会得到一个逗号分隔的数组值的字符串,为了得到最终的字符串，会调用数组每个值的 toLocaleString()方法，而不是toString()方法。

let obj1 = {
  toLocaleString() {
    return 'ls1';
  },
  toString() { 
    return "s1"; 
  }
}
let obj2 = {
  toLocaleString() {
    return 'ls2';
  },
  toString() { 
    return "s2"; 
  }
}
let arr = [obj1,obj2];
console.log(arr.toString());// s1,s2
console.log(arr.toLocaleString());// ls1,ls2

// 这里的分隔符都是‘,’ 如果想要使用其他分隔符，可以使用join()方法。
console.log(chars.join(','));// a,b,c
console.log(chars.join(undefined));// a,b,c
console.log(chars.join('|'));// a|b|c
