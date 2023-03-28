const good = {
  name:'good',
};

// 所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。
// 比如，get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。

const money = {
  get(obj,key,prox) {
    console.log(obj === good);// true
    console.log(key);// name
    console.log(prox === pro);// true
    return 'runout money';
  },
};

let pro = new Proxy(good,money);
console.log(good.name);// good
console.log(pro.name);// runout money

// Reflect对象中保存捕获器原始行为
money.get=Reflect.get;
pro = new Proxy(good,money);

console.log(good.name);// good
console.log(pro.name);// good