function modifyArray(nums){
    let n=nums.length;
    let ans=[],temp=[nums[0]];
    for(let i=1;i<n;i++){
        if(nums[i]==nums[i-1]+1) temp.push(nums[i]);
        else{ ans.push(temp);temp=[nums[i]];}
    }
    ans.push(temp)
    return ans;
}
console.log(modifyArray([1,2,3,5,6,9,10]));

function modifyArray2(nums){
    let n=nums.length;
    let i=0,j=0;
    let ans=[];
    while(j<n){
        // 如果满足条件一直 右端点一直往前移动
        while(j+1<n&&nums[j]+1==nums[j+1]) j++;
       // 如果不满足条件 计算拿到这一块的内容 左端点移动到右端点的下一个位置
       ans.push(nums.slice(i,j+1));
       i=j+1;
    }
    return ans;
}
console.log(modifyArray2([1, 2, 3, 5, 6, 9, 10]));