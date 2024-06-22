import { newArray } from "../递归循环"
type add<a extends number, b extends number> =
  [...newArray<a>, ...newArray<b>]['length'];
type A1 = add<1, 2>;
type A2 = add<999, 999>;

type sub<a extends number, b extends number> =
  newArray<a> extends [...newArray<b>, ...infer R]
  ? R['length']
  : 0;
type S1 = sub<999, 500>;

type mul<a extends number, b extends number, res extends unknown[] = []> =
  a extends 0 ? res['length'] : (b extends 0 ? 0 : mul<sub<a, 1>, b, [...newArray<b>, ...res]>);
type M1 = mul<101, 99>;

type div<a extends number, b extends number, res extends number = 0> =
  a extends 0 ? res : (b extends 0 ? 'Infinity' : div<sub<a, b>, b, add<res, 1> & number>);
type D1 = div<999, 3>;

type sLen<S> = S extends `${infer _}${infer R}` ? add<1, sLen<R>> : 0;
type SL1 = sLen<'123456789'>;

type bigger<a extends number,b extends number> = 
  a extends b ? false : a extends 0 ? false : b extends 0 ? true : bigger<sub<a,1>,sub<b,1>>; 
type B1 = bigger<5, 3>;
type B2 = bigger<1, 3>;

type Fibonacci<L extends number> = 
L extends 0 ? 0 : L extends 1 ? 1 : add<Fibonacci<sub<L, 1>>, Fibonacci<sub<L, 2>>>;
type F1 = Fibonacci<8>;
