/*
 * @Author: cmsunflower
 * @Date: 2020-10-01 20:32:20
 * @LastEditTime: 2020-10-03 12:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\2020.10.01日\Symbol.js
 */
let s1=Symbol('foo'),s2=Symbol('bar');
let o={
    [s1]:'foo val',
    foo:'123',
    bar:'bar'
}
console.log(o);

console.log(Object.getOwnPropertySymbols(o));
console.log(Object.getOwnPropertyNames(o));

// 迭代器
class Emitter{
    constructor(max){
        this.max=max;
        this.idx=0;
    }
    *[Symbol.iterator](){
        while(this.idx<this.max){
            yield this.idx++;
        }
    }
}
function count(){
    let emitter=new Emitter(5);
    for(const x of emitter){
        console.log(x);
    }
}
count();

// let sym1=new Symbol();
let sym1=Symbol();
let obj=Object(sym1);
console.log(obj);

let foo=Symbol('foo');

let fooGlobal=Symbol.for('foo');
let otherGlobal=Symbol.for('foo');
console.log(fooGlobal==otherGlobal);

console.log(Symbol.keyFor(fooGlobal));

console.log(Array.from('matte'));

console.log(Array.from('123456',x=>x*2));

console.log(Array.of(7,2,3));

console.log(Array.of([7,2,3]));

console.log(Array(7));

const arr2=new Array(7);

for(let item of arr2){
    console.log(item===undefined);
}
arr2.length=6;
console.log(arr2);


console.log(Object.prototype.toString.call(arr2));
console.log(arr2.constructor===Array);

// let res=arr.push(2);
// console.log(res,arr);

let res = arr2.pop()
console.log(res, arr2);

let res2 = arr2.shift();
console.log(res2, arr2);

let res3 = arr2.unshift(2);
console.log(res3, arr2);

let arr=[2,3,4,5,6];
let res4=arr.reverse();
console.log(res4,arr);
console.log(arr.sort((a,b)=>a-b));


let arr3=[2,3,4];
let res5=arr3.concat([2,3,4,[2,3]]);
console.log(res5,arr3);

let arr4=[2,3,4];
arr4[Symbol.isConcatSpreadable]=false;
let res6=arr3.concat(arr4);
console.log(res6);

let arr5=[1,2,3,4,5,6];
// arr5.length=6
// 4,5
let res7=arr5.slice(-2,-1);
// 返回了res7：[5]
console.log(res7,arr5);

let arr6=[1,2,3,4,5,6];
// 第一个参数 删除的第一个元素的位置 要删除的元素数量
// let res8=arr6.splice(2,1);
// console.log(res8,arr6);

let res8=arr6.splice(2,1,3,4,5);
console.log(res8,arr6);

console.log(arr6.find(item=>item>2));
console.log(arr6.findIndex(item => item > 2));

function myPow(x,n){
    let str = x.toString();
    console.log(str);
    let len = str.length - str.indexOf('.');
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= x;
    }
    return res.toFixed(len);
}
console.log(myPow(2.10000,3)); 
console.log(Math.pow(2.10000,3));
let x=2.00000
let str=x.toString();
console.log(typeof str,typeof x);