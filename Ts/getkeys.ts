type ObjectWithValue<T> = {
  [K in keyof T]: T[K] extends { value: infer V } ? V : unknown;
};

type MyObject = {
  value?: string | number | boolean,
  other?: any,
}

let M = {
  a: {
    value: 1,
  },
  b: {
    value: '',
    other: '',
  },
  d: {
    other: false,
  },
};

type N = ObjectWithValue<typeof M>;
const getkeys = <T extends Record<string, MyObject>>(obj: T) => {
  let result = {};
  return result as {
    [K in keyof T]: T[K] extends { value: infer V } ? V : unknown;
  };
}
let k = getkeys(M);