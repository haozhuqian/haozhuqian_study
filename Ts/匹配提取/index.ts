type getVP<P> = P extends Promise<infer V> ? V : never;
type PV = getVP<Promise<number>>;
type PN = getVP<PV>;

type ArrFirst<Arr> = Arr extends [infer F, ...unknown[]] ? F : never;
type ArrF = ArrFirst<[1, 2, 3]>;
type ArrNF = ArrFirst<[]>;

type ArrLast<Arr> = Arr extends [...unknown[], infer L] ? L : never;
type ArrL = ArrLast<[1, 2, 3]>;
type ArrNL = ArrLast<[]>;

type ArrNoF<Arr> = Arr extends [unknown, ...infer R] ? R : never;
type ArrNoF1 = ArrNoF<[1, 2, 3]>;
type ArrNoF2 = ArrNoF<[]>;

type StartWith<S extends string, P extends string> = S extends `${P}${string}` ? true : false;
type SWT = StartWith<'abc', 'a'>;
type SWF = StartWith<'abc', 'c'>;

type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S;
type R1 = Replace<'abc', 'b', 'x'>;
type R2 = Replace<'abc', '', 'x'>;

type trim<S extends string> =
  S extends `${infer R} ` ? trim<R> : S;
type T2 = trim<'abc '>;
type T3 = trim<'abc    '>;

type deleteChar<S extends string, C extends string> =
  S extends `${infer L}${C}${infer R}` ? `${L}${deleteChar<R, C>}` : S;
type DC1 = deleteChar<'abc', 'b'>;
type DC2 = deleteChar<'ababc', 'b'>;

type paramFn<Fn extends Function> =
  Fn extends (...args: infer P) => unknown ? P : never;
type PF = paramFn<(a: number, b: string) => void>;
type PF1 = paramFn<() => void>;

type returnFn<Fn extends Function> =
  Fn extends (...args: any[]) => infer R ? R : never;
type RF = returnFn<(a: number, b: string) => string>;
type RF1 = returnFn<() => void>;

class D {
  constructor(public name: string) { }
  say(this: D, name: string) {
    if (name) return name;
    return this.name;
  }
  but(this: { name: string }) {
    return this.name;
  }
  not(name: string) {
    return this.name;
  }
}
const d = new D('d');

type getThisT<Fn extends Function> =
  Fn extends (this: infer T, ...args: any[]) => any ? T : never;
type GT = getThisT<typeof d.say>;
type BT = getThisT<typeof d.but>;
type NT = getThisT<typeof d.not>;

interface I {
  new(name: string): { name: string };
  (name: string): string;
}

type getConstructorT<Fn extends new (...args: any) => any> =
  Fn extends new (...args: any) => infer R ? R : never;
type CT = getConstructorT<typeof D>;
type IT = getConstructorT<I>;
type IT1 = returnFn<I>;

type GetRefProps<Props> =
  Props extends { ref: infer Value } ? Value : never;
type GRP = GetRefProps<{ ref: string }>;
type GRP1 = GetRefProps<{}>;
