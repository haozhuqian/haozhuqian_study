export class Item<T extends string = string> {
  constructor(public type: T) { }
};
export class TextItem extends Item<'text'> {
  constructor(public text: string) {
    super('text' as const);
  }
};
export class BlockRefItem extends Item<'blockRef'> {
  constructor(public key: number) {
    super('blockRef' as const);
  }
};
export class BlockDefItem extends Item<'blockDef'> {
  constructor(public key: number, public childs: Item[]) {
    super('blockDef' as const);
  }
};
export class OpenBlockDefItem extends Item<'openBlockDef'> {
  constructor(public key: number, public childs = [] as Item[]) {
    super('openBlockDef' as const);
  }
};
export class CloseBlockDefItem extends Item<'closeBlockDef'> {
  constructor() {
    super('closeBlockDef' as const);
  }
};

const isNumber = (char: string) => /^\d$/.test(char);
class parseRes {
  root: BlockDefItem = new BlockDefItem(0,[]);
  stack: (BlockDefItem | OpenBlockDefItem)[] = [this.root];
  push(res: Item) {
    const items = this.stack[this.stack.length - 1].childs;
    if (items.length !== 0) {
      const preItem = items[items.length - 1];
      if (preItem instanceof TextItem) {
        if (res instanceof TextItem) {
          preItem.text += res.text;
          return;
        } else {
          preItem.text = preItem.text.trim().replace(/[ \n]+$/, '').replace(/^[\n ]+/, '');
        }
      }
    }
    if (res instanceof OpenBlockDefItem) {
      this.stack.push(res);
      items.push(res);
      return;
    }
    if (res instanceof CloseBlockDefItem) {
      if (this.stack.length === 1) {
        this.push(new TextItem('):'));
      } else {
        const openItem =  this.stack.pop() as OpenBlockDefItem;
        const items = this.stack[this.stack.length - 1].childs;
        items.pop();
        items.push(new BlockDefItem(openItem.key,openItem.childs));
      }
      return;
    }
    items.push(res);
  }
  end(){
    while(this.stack.length !== 1) {
      this.push(new CloseBlockDefItem());
    }
    if(this.root.childs.length === 0) {
      this.push(new TextItem(''));
    }
    return this.root.childs;
  }
}
export function parse(text: string) {
  const n = text.length, res = new parseRes;
  let i = 0, start = 0;
  while (i < n) {
    if (i > start) {
      res.push(new TextItem(text.slice(start, i)));
      start = i;
      continue;
    }
    if (text[i] === ')' && text[i - 1] !== '\\') {
      i++;
      if (i === n || text[i] !== ':') continue;
      i++;
      while (i < n && text[i] === ' ') i++;
      if (text[i] === '\n') i++;
      while (i < n && text[i] === ' ') i++;
      res.push(new CloseBlockDefItem());
      start = i;
      continue;
    }
    if (text[i - 1] !== '\\' && text[i] === ':') {
      i++;
      if (text[i] !== '[') continue;
      i++;
      let key = '';
      while (i < n && isNumber(text[i]) && text[i] !== ']') key += text[i++];
      if (i === n || text[i] !== ']') continue;
      i++;
      if (i === n || text[i] !== ':') continue;
      i++;
      if (i === n || text[i] !== '(') {
        while (i < n && text[i] === ' ') i++;
        if (text[i] === '\n') i++;
        while (i < n && text[i] === ' ') i++;
        res.push(new BlockRefItem(Number(key)));
        start = i;
        continue;
      }
      res.push(new OpenBlockDefItem(Number(key)));
      i++;
      start = i;
      continue;
    }
    while (i < n && text[i] !== ':' && text[i] !== ')') i++;
  }
  if (i > start) {
    res.push(new TextItem(text.slice(start, i)));
    start = i;
  }
  return res.end();
}