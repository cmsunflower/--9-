function exchange(nums){
    let n=nums.length;
    let i=0,j=0;
    while(j<n){
        // 是奇数的情况下
        if((nums[j]&1)==1){
            swap(nums,i++,j);
        }
        j++;
    }
    return nums;
}
function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}
// 测试
console.log(exchange([1,2,3,4]));