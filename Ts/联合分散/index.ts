type isUnion<A, B = A> = A extends B ? [B] extends [A] ? false : true : false;
type I1 = isUnion<1 | 2 | 3>;
type I2 = isUnion<[1 | 2, 2 | 3]>;

type union<A extends unknown[]> = A[number];
type U1 = union<[1, 2, 3]>;

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}__${E[number]}__${M[number]}`;
type B1 = BEM<'block', ['elem', 'rar'], ['mod', 'jpe']>;

type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
type C1 = Combination<'a', 'b'>;

type allCombination<A extends string, B extends string = A> = A extends A ? Combination<A,allCombination<Exclude<B,A>>> : never;
type AC1 = allCombination<'a' | 'b' | 'c'>;