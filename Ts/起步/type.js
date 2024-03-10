let base = {
  a: {
    value: 11
  },
}
console.log(base)
let base1 = {
  ...base,
  b:{
    value: 12
  }
}
console.log(base1)
let base2 = {
  ...base,
  c:{
    value: 13
  }
}
console.log(base2)