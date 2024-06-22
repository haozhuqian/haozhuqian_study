
// 元组类型重构
type push<Tuple extends unknown[], El> =
  [...Tuple, El];
type P1 = push<[string, number, boolean], string>;
type P2 = push<P1, boolean>;
// 数组类型拆分重构
type group<a extends unknown[], b extends unknown[]> =
  a extends [infer aF, ...infer aO]
  ? (b extends [infer bF, ...infer bO] ? [[aF, bF], ...group<aO, bO>] : [[aF], ...group<aO, []>])
  : (b extends [infer bF, ...infer bO] ? [[bF], ...group<bO, []>] : []);
type G1 = group<[1, 2, 3], [4, 5, 6]>;
type G2 = group<[1, 2], [4, 5, 6]>;
type G3 = group<[1, 2], [4]>;
// 字符串类型重构
type UpperF<S extends string> =
  S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;
type UF1 = UpperF<'abc'>;
type UF2 = UpperF<'1'>;

type mName<S extends string> =
  S extends `${infer F}_${infer R}${infer O}`
  ? `${F}${Uppercase<R>}${mName<O>}`
  : S;
type MN1 = mName<'abc_def_gh'>;
type MN2 = mName<'abc_def_gh_def_gh_def_gh_def_gh_def_gh_def_gh'>;
// 索引类型重构
type OVToA<Obj extends Object> =
  {
    [K in keyof Obj]: Obj[K][];
  }
type O1 = OVToA<{ a: string, b: number }>;

type OKToU<Obj extends Object> =
  {
    [K in keyof Obj as Uppercase<string & K>]: Obj[K];
  }
type O2 = OKToU<{ a: string, b: number, 1: 0 }>;

type OKV<K extends number | string | symbol, V> = { [key in K]: V };
type O3 = OKV<'a' | 'b', string>;

type ReadO<O extends Object> = {
  readonly [K in keyof O]: O[K]
}
type ReO = ReadO<{ a: string, b: number }>;

type PartialO<O extends Object> = {
  [K in keyof O]?: O[K]
}
type PO = PartialO<{ a: string, b: number }>;

type requestO<O extends Object> = {
  [K in keyof O]-?: O[K]
}
type RO = requestO<{ a?: string, b: number }>;

type filterKO<O extends Object,KeyT> = {
  [K in (keyof O) as (K extends KeyT ? K : never)]: O[K]
}
type FKO = filterKO<{ a: string, b: number, 1: 0 },number>;

type filterVO<O extends Object,KeyT> = {
  [K in (keyof O) as (O[K] extends KeyT ? K : never)]: O[K]
}
type FVO = filterVO<{ a: string, b: number, 1: 0 },number>;