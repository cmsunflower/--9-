function moveZeroes(nums){
    let n=nums.length;
    for(let i=0,lastIndex=0;i<n;i++){
        if(nums[i]!==0){
            swap(nums,i,lastIndex);
            lastIndex++;
        }
    }
    return lastIndex;
}
function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}