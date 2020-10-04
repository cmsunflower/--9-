function majorityElement(nums){
    let count=0,maj=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        // 先假设 第一个为众数
         //说明前面没有出现众数 
        if(count==0) maj=nums[i];
        maj==nums[i]?count++:count--;
    }
    return maj;
}
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));

