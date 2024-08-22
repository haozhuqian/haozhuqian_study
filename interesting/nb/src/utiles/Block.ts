import { CtolRender, Render, TextRender } from "./Render";
import { getColor } from "./styleTool";
import { Context } from './Context';
import { BlockDefItem, parse, TextItem } from "./ParseTool";
import { diff } from "./keyTool";

export class Block {
  readonly renders = new Set<Render>();
  del() {
    if(this.context.block.Root === this) return;
    this.renders.forEach((r) => r.delY());
  }
  replace(newChilds: Block[]) {
    if(this.context.block.Root === this) return;
    this.renders.forEach((r) => r.replaceY(newChilds));
  }
  // addBefore(newChilds: Block[]) {
  //   if(this.context.block.Root === this) return;
  //   this.renders.forEach((r) => r.addBeforeY(newChilds));
  // }
  // addAfter(newChilds: Block[]) {
  //   if(this.context.block.Root === this) return;
  //   this.renders.forEach((r) => r.addAfterY(newChilds));
  // }
  constructor(readonly context: Context) { };
}

export class CtolBlock extends Block {
  readonly renders = new Set<CtolRender>();
  readonly color = getColor();
  constructor(
    context: Context,
    public childs: Block[],
    public key = context.block.Ctol.newK(),
  ) {
    super(context);
    context.block.Ctol.set(key, this);
  }
  // del(): void {
  //   this.context.block.Ctol.bacK(this.key);
  //   this.context.block.Ctol.del(this.key);
  //   super.del();
  // }
  // replace(newChilds: Block[]) {
  //   if (newChilds.length === 0) return this.del();
  //   this.context.block.Ctol.bacK(this.key);
  //   this.context.block.Ctol.del(this.key);
  //   super.replace(newChilds);
  // }
  getChilds() {
    const childs = new Set<Block>([this]);
    childs.forEach((block) => {
      if (block instanceof CtolBlock) {
        block.childs.forEach((child) => {
          if (!childs.has(child)) {
            childs.add(child);
          }
        })
      }
    })
    return childs;
  };
  renewN(newChilds: Block[]) {
    if (newChilds.length === this.childs.length && newChilds.every((v, i) => v === this.childs[i])) return;
    const {hs,ds} = diff(this.childs, newChilds);
    this.renewH(hs, ds, newChilds);
  }
  renewH(hs: (number | Block)[], ds: number[], ncs: Block[]) {
    if (hs.length === 0 && ds.length === 0) return;
    this.childs = ncs;
    this.renders.forEach((r) => r.renewM(hs, ds));
  }
}

export class TextBlock extends Block {
  readonly renders = new Set<TextRender>();
  constructor(context: Context, public text: string) { super(context) };
  renewT(newText: string, from: TextRender, name: number) {
    const handler = this.context.block;
    if (newText === this.text) return;
    handler.Text.del(this);
    handler.Text.set(this, window.setTimeout(() => {
      if (newText && parse(newText).length !== 1) {
        const newItems = parse(newText);
        const newBlocks= newItems.map((i)=>handler.newB(i));
        const noLoopBlocks = newBlocks.map((b) => {
          if (b instanceof CtolBlock && b.getChilds().has(this)) {
            return handler.newB(
              new BlockDefItem(
                handler.Ctol.newK(),
                [new TextItem(`为避免循环引用块${b.key}而新创建的块`)]
              ));
          }
          return b;
        });
        this.replace(noLoopBlocks);
      } else {
        this.text = newText;
        this.renders.forEach((r) => r.renewT(newText, from, name));
      }
    }, 300))
  }
}