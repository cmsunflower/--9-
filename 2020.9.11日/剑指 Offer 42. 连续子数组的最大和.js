function maxSubArray(nums){
    let n=nums.length;
    if(n==0) return 0;
    // ans用来暂存 结果，temp用来存储
    let ans=nums[0],temp=0;
    // temp的值为负，说明对数组最大值的贡献小于自身数组的贡献
    for(let i=0;i<n;i++){
        temp+=nums[i];
         //什么时候更新ans 当前暂存值的和大于ans值的时候，更新
        if(temp>ans) ans=temp;
        // 什么时候清空temp 当temp<=0的时候清空
        if(temp<=0) temp=0;
    }
    return ans;
}
// 测试
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 使用动态规划来做
function maxSubArray2(nums) {
    let n = nums.length;
    if (n == 0) return 0;
    let dp=nums.reduce(function(prev,curN){
        prev.push(curN)
        return prev;
    },[]);
    for(let i=1;i<n;i++){
        dp[i]=Math.max(dp[i],dp[i-1]+nums[i]);
    }
    return Math.max(...dp);
}
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log([-2, 1, -3, 4, -1, 2, 1, -5, 4].reduce(function(acc,cur){
//     acc.push(cur);
//     return acc;
// },[]));

// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// \

// console.log(myOrderedArray)