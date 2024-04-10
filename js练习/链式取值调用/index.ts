const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'black', 'white', 'cyan', 'magenta'] as const;
const style = ['bold', 'underline', 'italic', 'dim', 'inverse', 'hidden', 'strikethrough'] as const;
//每次取值拿到一个新的函数对象，但是函数的原型是一样的，调用原型方法会再返回一个新的函数对象,并且拥有额外的属性。

type Color = typeof colors[number];
type Style = typeof style[number];

type Styles = {
  val?: string;
  color?: Color;
  bg?: Color;
} & {
    [s in Style]?: boolean;
  };

type M = {
  (v: string): Styles;
  s: Styles;
} & {
    [s in Color]: M;
  } & {
    [s in Color as `bg${Capitalize<s>}`]: M;
  }
  & {
    [s in Style]: M;
  }

/**
 * 创建一个新的函数对象，生成新的样式对象，添加到新的函数对象上
 * @param styles 当前函数已有的样式
 * @returns 
 */
const createm = (oldStyles: Styles = {}, changeStyleFn: (styles: Styles) => void = (s:Styles)=>{return}) => {
  const newStyles: Styles = { ...oldStyles };
  changeStyleFn(newStyles);
  const m = (s: string) => ({ ...newStyles, val: s } as Styles);
  m.s = newStyles;
  Object.setPrototypeOf(m, pro);
  return m as M;
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

export default createm;