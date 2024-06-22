const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'black', 'white', 'cyan', 'magenta'];
const style = ['bold', 'underline', 'italic', 'dim', 'inverse', 'hidden', 'strikethrough'];
//每次取值拿到一个新的函数对象，但是函数的原型是一样的，调用原型方法会再返回一个新的函数对象,并且拥有额外的属性。

/**
 * 创建一个新的函数对象，生成新的样式对象，添加到新的函数对象上
 * @param styles 当前函数已有的样式
 * @returns 
 */
const createm = (oldStyles, changeStyleFn) => {
  const newStyles = { ...oldStyles };
  if (changeStyleFn) changeStyleFn(newStyles);
  const m = (s) => ({ ...newStyles, val: s });
  m.s = newStyles;
  Object.setPrototypeOf(m, pro);
  return m;
}


const pro = {
  color(color) {
    return createm(this, (style) => style.color = color);
  },
  bg(color) {
    return createm(this, (style) => style.bg = color);
  },
  style(s) {
    return createm(this, (style) => style[s] = true);
  }
};

for (let c of colors) {
  Object.defineProperty(pro, c, {
    get() {
      return this.color(c);
    }
  });
  Object.defineProperty(pro, 'bg' + c.replace(/^(.)/, (s) => s.toUpperCase()), {
    get() {
      return this.bg(c);
    }
  });
}

for (let s of style) {
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