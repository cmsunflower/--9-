// instanceof 
let arr=[];
arr instanceof Array;// 通过原型来进行判断 可能返回false

Array.isArray(arr);// 有兼容性问题

[].toString.call(arr);


arr.constructor();// constructor是可写的 可以被修改

Array.prototype={};
console.log(arr instanceof Array);
