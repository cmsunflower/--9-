/*
 * @Author: cmsunflower
 * @Date: 2020-09-29 11:18:48
 * @LastEditTime: 2020-09-29 17:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings
 * @FilePath: \算法\2020.9.29日\剑指 Offer 03. 数组中重复的数字.js
 */
function findReapeatNumber(nums){
    let n=nums.length;
    for(let i=0;i<n;){
        while(nums[i]!==i){
            if(nums[i]==nums[nums[i]]) return nums[i];
            swap(nums,i,nums[i]);
        }
        i++;
    }
}
function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}
console.log(findReapeatNumber([2,3,1,0,2,5,3]));


function binarySearch(nums, left, right, target) {
    while (left < right) {
        let mid = parseInt((right + left + 1) / 2);
        let temp = nums[mid];
        if(temp<=target) left=mid;
        else right = mid - 1;
    }
    return left;
}
let nums = [11,12,13,14,15];
console.log(binarySearch(nums,0,5,true,19));