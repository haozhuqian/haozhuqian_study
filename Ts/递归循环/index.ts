type getPV<P> =
  P extends Promise<infer V> ? getPV<V> : P;
type PV1 = getPV<Promise<Promise<Promise<number>>>>;
type PV2 = getPV<number>;

type reverseArr<Arr extends unknown[]> =
  Arr extends [infer F, ...infer R] ? [...reverseArr<R>, F] : [];
type RA1 = reverseArr<[1, 2, 3]>;

type include<Arr extends unknown[], target> =
  Arr extends [infer F, ...infer R] ? F extends target ? true : include<R, target> : false;
type I1 = include<[1, 2, 3], 3>;
type I2 = include<[1, 2, 3], 4>;

export type newArray<len extends number, El = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends len ? Arr : newArray<len, El, [...Arr, El]>;
type NA1 = newArray<1, number>;

type SToC<S extends string> = S extends `${infer F}${infer R}` ? F | SToC<R> : [];
type STC1 = SToC<'abcazad'>;

type DRO<O extends Object> = O extends never ? never : {
  readonly [K in keyof O]: O[K] extends Object ?
  (O[K] extends Function
    ?O[K]
    :DRO<O[K]>
  )
  :O[K]
};
type D1 = DRO<{ a: { b: { c: number } } }>;