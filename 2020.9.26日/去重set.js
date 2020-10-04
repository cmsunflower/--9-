// 对象不去重，NaN去重
console.log([...new Set([1, 2, 3, {},3, {}, NaN, NaN, undefined])]);