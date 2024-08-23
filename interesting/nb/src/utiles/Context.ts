import { getText, keyPoolCreater } from "./keyTool";
import { Item, BlockDefItem, BlockRefItem, parse, TextItem } from "./ParseTool";
import { Block, CtolBlock, TextBlock } from './Block';
import { CtolRender, Render, TextRender } from "./Render";

class BlockHandler {
  news = new Map<string, (item: Item) => Block>([]);
  Ctol: CtolBlockHandler;
  Text = new TextBlockHandler();
  Root = null as Block | null;
  constructor(readonly context: Context) {
    this.Ctol = new CtolBlockHandler(context);
    this.news.set('text', (item: Item) => new TextBlock(context, (item as TextItem).text));
    this.news.set('blockRef', (item: Item) => this.Ctol.get((item as BlockRefItem).key)!);
    this.news.set('blockDef', (item: Item) => {
      const key = (item as BlockRefItem).key;
      if (this.Ctol.has(key)) return this.Ctol.get(key)!;
      const newB = new CtolBlock(context, (item as BlockDefItem).childs.map((i) => this.newB(i)), key);
      this.Ctol.set(key, newB);
      return newB;
    });
  }
  init(rootKey: number) {
    this.Root = this.Ctol.get(rootKey);
  }
  newB(item: Item) {
    if (this.news.has(item.type)) return this.news.get(item.type)!(item);
    else return new Block(this.context);
  };
}

class CtolBlockHandler {
  kp = keyPoolCreater(10001, 1);
  bs = new Map<number, CtolBlock>();
  constructor(readonly context: Context) {
  }
  has(key: number) { return this.bs.has(key) };
  set(key: number, b: CtolBlock) { this.bs.set(key, b) };
  get(key: number): CtolBlock {
    if (this.has(key)) return this.bs.get(key)!;
    const newB = new CtolBlock(this.context, [], key);
    this.set(key, newB);
    getText(key).then((text) => {
      newB.renewN(parse(text).map((p) => this.context.block.newB(p) as Block));
    });
    return newB;
  };
  del(key: number) { this.bs.delete(key) };
  newK() { return this.kp.get() };
  bacK(key: number) { this.kp.back(key) };
}

class TextBlockHandler {
  ts = new Map<TextBlock, number>();
  has(t: TextBlock) { return this.ts.has(t) };
  get(t: TextBlock) { return this.ts.get(t) };
  set(t: TextBlock, id: number) { this.ts.set(t, id) };
  del(t: TextBlock) {
    if (!this.ts.has(t)) return;
    window.clearTimeout(this.get(t)!)
    this.ts.has(t)
  };
}
class RenderHandler {
  root = null as Render | null;
  current = null as Render | null;
  kp = keyPoolCreater(100, 1);
  newK() { return this.kp.get() };
  bacK(key: number) { this.kp.back(key) };
  constructor(readonly context: Context) { }
  init(root: Block) {
    this.root = this.newR(root, null);
  }
  contact(Childs: Render[]) {
    const n = Childs.length;
    if (n < 2) return;
    if (Childs[0]) Childs[0].after = Childs[1];
    if (Childs[n - 1]) Childs[n - 1].before = Childs[n - 2];
    for (let i = 1; i < n - 1; i++) {
      Childs[i].before = Childs[i - 1];
      Childs[i].after = Childs[i + 1];
    }
  };
  newR(b: Block, p: CtolRender | null): Render {
    if (b instanceof CtolBlock) {
      return new CtolRender(this.context, b, p);
    }
    else return new TextRender(this.context, b as TextBlock, p as CtolRender);
  };
  focus(r: Render, name?: number) {
    if (name !== undefined) this.context.current = name;
    if (this.current) this.blur(this.current);
    this.current = r;
    r.setFoceds.forEach(set => set(true));
  };
  blur(r: Render) {
    r.setFoceds.forEach(setFoced => setFoced(false));
  }
}

export enum ViewState {
  source = 'source',
  block = 'block',
  preview = 'preview',
};
export const ViewStateNames = ['source', 'block', 'preview'] as ViewState[];

export class View {
  name: number;
  state = ViewState.block;
  constructor(name: number) {
    this.name = name;
  }
}

export class Context {
  private namesPool = keyPoolCreater(0, 1);
  private views = [new View(0)];
  private setViews = null as ((newS: View[]) => void) | null;
  block: BlockHandler;
  render: RenderHandler;
  current = 0;
  constructor(blockKey: number) {
    console.log(this);
    this.block = new BlockHandler(this);
    this.render = new RenderHandler(this);
    this.block.init(blockKey);
    this.render.init(this.block.Root!);
  }
  renewV() {
    this.setViews!(this.getViews());
  }
  init(setViews: React.Dispatch<React.SetStateAction<View[]>>) {
    this.setViews = (newS: View[]) => {
      this.views = newS;
      setViews(newS);
    };
  }
  newN() {
    const view = this.namesPool.get();
    this.views.push(new View(view));
    this.setViews!(this.getViews());
    return view;
  }
  delN(view?: View) {
    if (view === undefined && this.views.length > 1) view = this.views.pop();
    if (!view) return
    this.namesPool.back(view.name);
    this.views = this.views.filter(s => s !== view);
    this.setViews!(this.getViews());
  }
  getViews() { return [...this.views]; }

}



