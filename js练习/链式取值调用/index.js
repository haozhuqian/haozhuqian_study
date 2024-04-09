const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'black', 'white', 'cyan', 'magenta'];
const style = ['bold', 'underline', 'italic', 'dim', 'inverse', 'hidden', 'strikethrough'];
//每次取值拿到一个新的函数对象，但是函数的原型是一样的，调用原型方法会再返回一个新的函数对象,并且拥有额外的属性。

const createm = (styles={})=>{
  const m = (s)=>({...styles,val:s});
  // 这里更好的做法是不用m.s，而是用一个symbol来存储styles，这样就不会被外部修改了和随便访问了，同时最好也可以设置为不可遍历的键
  m.s = styles;
  Object.setPrototypeOf(m,pro);
  return m;
}

const getm = (m,fn)=>{
  const style = {...m.s};
  fn(style);
  return createm(style);
}

const pro = {
  color(color){
    return getm(this,(style)=>style.color = color);
  },
  bg(color){
    return getm(this,(style)=>style.bg = color);
  },
  style(s){
    return getm(this,(style)=>style[s] = true);
  }
};


for(let c of colors){
  Object.defineProperty(pro, c, {
    get() {
      return this.color(c);
    }
  });
  Object.defineProperty(pro, 'bg'+c.replace(/^(.)/,(s)=>s.toUpperCase()), {
    get() {
      return this.bg(c);
    }
  });
}

for(let s of style){
  Object.defineProperty(pro, s, {
    get() {
      return this.style(s);
    }
  });
}

const m = createm();
const red = m.red;
const redBold = red.bold;

console.log(m('a'));
console.log(m.red('a'));
console.log(red('a'));
console.log(m.red.bold('a'));
console.log(redBold('a'));
console.log(m.red.bold.bgGreen('a'));
console.log(m.red.bold.bgGreen.blue('a'));
console.log(m('a'));