'use strict'
const foo=Object.freeze({});
foo.prop=123;

console.log(foo.prop);

// const foo=Object.freeze({
//     prop:[]
// })
// foo.prop.push(123);
// console.log(foo.prop);