function threeSum(nums,target){
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let ans=[];
    for(let i=0;i<n-2;i++){
        if(i>0&&nums[i]==nums[i-1]) continue;
        let start=i+1,end=n-1;
        while(start<end){
            let sum=nums[i]+nums[start]+nums[end];
            if(sum==target){ 
                ans.push([nums[i],nums[start],nums[end]]);
                while (start < end && nums[start] == nums[++start]);    
                while (start < end && nums[end] == nums[--end]);
            }
            else if(sum<target){
                while(start<end&&nums[start]==nums[++start]);
            }
            else{
                while(start<end&&nums[end]==nums[--end]);
            }
        }
    }
    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4],0));

// 两数之和等于0 
function twoSum(nums,target){
    let n=nums.length;
    let map=new Map();
    for(let i=0;i<n;i++){
        let c=target-nums[i];
        if(map.has(c)) return [i,map.get(c)];
        map.set(nums[i],i);
    }
}