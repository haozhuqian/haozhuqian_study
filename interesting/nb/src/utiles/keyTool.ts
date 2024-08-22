import { wait } from "./time";
export function keyPoolCreater(i: number, direction = 1 as (-1 | 1)) {
  const backKey: number[] = [];
  return {
    get: () => (backKey.length ? backKey.pop() : i += direction) as number,
    back: (id: number) => { backKey.push(id) }
  }
}

export function IArray(length: number|any[]) {
  if(Array.isArray(length)) return Array.from({ length:length.length }, (_, i) => i);
  return Array.from({ length }, (_, i) => i);
}
export function diff<T>(olds:T[],news:T[]):{hs:(T|number)[],ds:number[]}{
  const oldS = new multiMap<T, number>(olds.map((v,i)=>[v,i]));
  oldS.forEach((v) => { v.reverse() });
  const hs = [] as (T|number)[];
  news.forEach((nv) => {
    if (oldS.has(nv)) {
      hs.push(oldS.get(nv).pop()!);
    }
    else hs.push(nv);
  });
  const ds = oldS.all();
  return {hs,ds};
}
export function change<F,T>(hs:(F|number)[],ds:number[],olds:T[],del:(dels:T)=>void,trans:(from:F)=>T):T[]{
  ds.forEach((d)=>del(olds[d]));
  const news:T[] = hs.map((h)=>{
    if(typeof h === 'number') return olds[h];
    else return trans(h);
  })
  return news;
}
export class countMap<T> {
  private map = new Map<T, number>();
  constructor(public arr = [] as T[]) {
    arr.forEach((v) => this.map.set(v, this.map.get(v) || 0 + 1));
  }
  get = (v: T) => this.map.get(v) || 0;
  has = (v: T) => this.map.has(v);
  set = (v: T, c: number) => { this.map.set(v, c) };
  add = (v: T) => { this.map.set(v, this.map.get(v) || 0 + 1) };
  del = (v: T) => {
    if (this.map.has(v)) {
      const c = this.map.get(v)!;
      if (c === 1) {
        this.map.delete(v);
      } else {
        this.map.set(v, c - 1);
      }
    }
  }
  forEach = (cb: (v: number, c: T) => void) => {
    this.map.forEach(cb);
  }
}
export class multiMap<K, V> {
  private map = new Map<K, V[]>();
  constructor(public arr = [] as [K, V][]) {
    arr.forEach(([k, v]) => this.push(k, v));
  }
  get(k: K){ return (this.map.get(k) || []) as V[]};
  has(k: K){ return this.map.has(k);}
  push(k: K, v: V){
    const vs = this.get(k);
    vs.push(v);
    this.map.set(k, vs);
  };
  pop(k: K) {
    const vs = this.get(k);
    const v = vs.pop();
    if(vs.length === 0) this.map.delete(k);
    return v;
  }
  forEach(cb: (v: V[], k: K, M: Map<K, V[]>) => void){
    this.map.forEach(cb);
  }
  all(){
    const a = [] as V[];
    this.map.forEach((vs) => a.push(...vs));
    return a;
  };
}

const contents = new Map<number, string>([
  [1, `1just:[2]:(
    2just
    some
    :[3]:(
      3just
      some
      nice:[6]:(6just
        some
        nice
        thing
        ):
      thing):
    [https://www.baidu.com](nice)
    ![https://www.baidu.com](nice)
    :[3]::[4]:(4just
      some
      nice
      :[3]::[5]:(5just
        some
        nice
        thing:[6]:):
      thing):
    nice
    thing):
  some`]
])

export function getText(realKey: number) {
  return wait(300).then(() => {
    return contents.get(realKey) || ``;
  })
}