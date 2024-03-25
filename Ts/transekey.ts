function extractValues<T extends { value: string }[]>(arr: T): (T[number]['value'])[] {
  return arr.map(item => item.value);
}

const result = extractValues([
  { key: 'a', value: '1' } as const,
  { key: 'b', value: '2' } as const,
  { key: 'c', value: '3' } as const
]);
// result 类型被推断为 ('1' | '2' | '3')[]