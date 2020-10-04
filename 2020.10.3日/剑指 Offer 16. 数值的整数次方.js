/*
 * @Author: cmsunflower
 * @Date: 2020-10-03 14:34:40
 * @LastEditTime: 2020-10-03 14:39:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \算法\2020.10.3日\剑指 Offer 16. 数值的整数次方.js
 */
/**指数可能存在负数的情况 */
function myPow(x,n){
    let res=absPow(x,Math.abs(n));
    return n>=0?res:1/res;
}
function absPow(x,n){
    if(n==0) return 1;
    if(n==1) return x;
    let sub=absPow(x,parseInt(n/2));
    return n % 2 == 0 ? sub * sub : sub * sub*x;
}
console.log(myPow(2.0000,10));