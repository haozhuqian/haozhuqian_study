let ta = 'default';
let tb = 'default';
class A {
  constructor() {
    console.log(1);
    this.setAttributes(); // 在构造函数中调用 setAttributes 方法
    ta = this;
    console.log(ta);
  }
}

class B extends A {
  name = '';

  constructor() {
    super();
    tb = this;
    console.log(this.name); // 输出:
    console.log('B constructor');
  }

  setAttributes() {
    console.log('setAttributes in B');
    this.name = 'bbb';
    console.log(this.name)
  }
}

const b = new B();
console.log(b.name); // 输出: 
console.log(b); // 输出: B
console.log(ta === tb); // 输出: