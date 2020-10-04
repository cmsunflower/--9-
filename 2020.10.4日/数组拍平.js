/*
 * @Author: cmsunflower
 * @Date: 2020-10-04 16:44:10
 * @LastEditTime: 2020-10-04 18:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \算法\2020.10.4日\数组拍平.js
 */
function doFlat(arr){
    let res=[];
    let stack=[...arr];
    while(stack.length){
        let temp=stack.shift();
        if(Array.isArray(temp)){
            stack.push(...temp);
        }else{
            res.push(temp);
        }
    }
    return res;
}
console.log(doFlat([1,2,3,[3,4,5,[11,2]]]));
