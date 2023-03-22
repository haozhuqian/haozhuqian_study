// 所有值都有其布尔值的等价形式/
// 会被转换为假值的非boolean值有五个，空字符串，0，NaN，null，undefined.
console.log(Boolean(''||0||NaN||null||undefined||false));