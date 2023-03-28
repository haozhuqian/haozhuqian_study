let good = {
  name:'money',
};
let money = {};
let pro = new Proxy(good, money);
console.log(pro.id === good.id);// true
pro.id = 'good';
console.log(pro.id === good.id);// true
good.name = 'money';
console.log(pro.id === good.id);// true
console.log(good.hasOwnProperty('name'));// true
console.log(pro.hasOwnProperty('name'));// true
// console.log(pro instanceof Proxy);// Function has non-object prototype 'undefined' in instanceof check
console.log(pro == good);// false