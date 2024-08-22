import { Dispatch, SetStateAction } from "react";
import { Block, CtolBlock, TextBlock } from "./Block";
import { Context } from "./Context";
import { IArray } from "./keyTool";

export class Render {
  key: number;
  before: Render | null = null;
  after: Render | null = null;
  ref = new Map<number, HTMLDivElement>();
  setFoceds = new Map<number, (foced:boolean)=>void>();
  constructor(
    readonly context: Context,
    readonly block: Block,
    public parent: CtolRender | null,
    public foced = false,
  ) {
    this.key = context.render.newK();
    block.renders.add(this);
  }
  del() {
    if (!this.parent) return;
    if(this instanceof CtolRender) {this.childs.forEach((c) => c.del());}
    this.context.render.bacK(this.key);
    this.block.renders.delete(this);
    if(this.block.renders.size===0) this.block.del();
  }
  delY():void {
    const parent = this.parent;
    if (!parent) return;
    if(parent.childs.length===1) return parent.delY();
    const delI = parent.childs.indexOf(this);
    const hs = IArray(parent.block.childs);
    parent.block.childs.splice(delI, 1);
    hs.splice(delI, 1);
    parent.block.renewH(hs,[delI],parent.block.childs);
  }
  replaceY(newBS: Block[]) {
    if (!this.parent) return;
    if (newBS.length === 0) return this.delY();
    const parent = this.parent;
    const reI = parent.childs.indexOf(this);
    const hs = IArray(parent.block.childs) as (Block|number)[];
    hs.splice(reI, 1, ...newBS);
    parent.block.childs.splice(reI, 1, ...newBS);
    parent.block.renewH(hs,[reI],parent.block.childs);
  }
  addBeforeY(newBS: Block[]) {
    if (!this.parent || newBS.length === 0) return;
    const parent = this.parent;
    const i = parent.childs.indexOf(this);
    const hs = IArray(parent.block.childs) as (Block|number)[];
    hs.splice(i+1, 0, ...newBS);
    parent.block.childs.splice(i+1, 0, ...newBS);
    parent.block.renewH(hs,[],parent.block.childs);
  }
  addAfterY(newBS: Block[]) {
    if (!this.parent || newBS.length === 0) return;
    const parent = this.parent;
    const i = parent.childs.indexOf(this);
    const hs = IArray(parent.block.childs) as (Block|number)[];
    hs.splice(i, 0, ...newBS);
    parent.block.childs.splice(i, 0, ...newBS);
    parent.block.renewH(hs,[],parent.block.childs);
  }
}

export class CtolRender extends Render {
  childs: Render[];
  setChilds = new Map<number, (childs: Render[]) => void>();
  setOpen = new Map<number, (open:boolean) => void>();
  constructor(
    context: Context,
    readonly block: CtolBlock,
    parent: CtolRender | null,
    foced = false,
    public open = true,
  ) {
    super(context, block, parent, foced);
    this.childs = [];
  }
  renewM(hs: (number | Block)[], ds: number[]) {
    if (hs.length === 0 && ds.length === 0) return;
    const context = this.context.render;
    const olds = this.childs;
    const news = hs.map((h) => {
      if (typeof h === 'number') return olds[h];
      else return context.newR(h, this);
    });
    context.contact([null, ...news, null] as Render[]);
    this.childs = news;
    ds.forEach((d) => olds[d].del());
    this.setChilds.forEach((setChild) => setChild(news));
  }
  turn(){
    this.open = !this.open;
    this.setOpen.forEach((setOpen) => setOpen(this.open));
  }
  renewY(newBS: Block[]) {
    if (newBS.length === 0) return this.delY();
    this.block.renewN(newBS);
  }
  init(name: number, ref: HTMLDivElement, setFoced: Dispatch<SetStateAction<boolean>>, setChilds: Dispatch<SetStateAction<Render[]>>,setOpen: Dispatch<SetStateAction<boolean>>) {
    const context = this.context.render;
    this.ref.set(name, ref);
    this.setFoceds.set(name, (foced:boolean)=> {
      this.foced = foced;
      setFoced(foced);
    });
    this.setChilds.set(name, (childs: Render[]) => {
      this.childs = childs;
      setChilds(childs)
    });
    this.setOpen.set(name, (open:boolean)=> {
      this.open = open;
      setOpen(open);
    });
    if (!name) {
      this.childs = this.block.childs.map((b) => context.newR(b, this));
      this.context.render.contact([null, ...this.childs, null] as Render[]);
    }
    setChilds(this.childs);
  }
}

export class TextRender extends Render {
  text: string;
  setText = new Map<number, (text:string)=>void>();
  constructor(
    context: Context,
    readonly block: TextBlock,
    parent: CtolRender,
    foced = false,
  ) {
    super(context, block, parent, foced);
    this.text = block.text;
  }
  renewT(newText: string, from: TextRender, name: number) {
    if (newText === this.text) return;
    this.text = newText;
    if (this === from) this.setText.forEach((setText, n) => n !== name && setText(newText));
    else this.setText.forEach((setText) => setText(newText));
  }
  init(name: number, ref: HTMLDivElement, setFoced: Dispatch<SetStateAction<boolean>>, setText: Dispatch<SetStateAction<string>>) {
    this.ref.set(name, ref);
    this.setFoceds.set(name, (foced:boolean)=> {
      this.foced = foced;
      setFoced(foced);
    });
    this.setText.set(name, (text:string)=> {
      this.text = text;
      setText(text);
    });
  }
}
