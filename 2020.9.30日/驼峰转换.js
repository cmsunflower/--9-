/*
 * @Author: cmsunflower
 * @Date: 2020-09-30 16:07:38
 * @LastEditTime: 2020-09-30 16:26:29
 * @FilePath: \算法\2020.9.30日\驼峰转换.js
 */
function camelTransfer(str){
    let arr=str.split('-');
    let res=arr[0];
    let temp=null;
    for(let i=1;i<arr.length;i++){
        temp=arr[i];
        res+=temp[0].toUpperCase()+temp.slice(1);
    }
    return res;
}
let str='border-bottom-color';
console.log(camelTransfer(str));