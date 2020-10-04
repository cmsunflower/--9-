function getBeatifyNumber(nums){
    let n=nums.length;
    // 寻找相同的 寻找连续递增的
    let sameCount=1,seqCount=1,temp1=1,temp2=1;
    for(let i=1;i<n;i++){
        if(nums[i-1]<nums[i]) temp2++;
        else temp2=1;
        seqCount=Math.max(seqCount,temp2);
        if(nums[i-1]==nums[i]) temp1++;
        else temp1=1;
        sameCount=Math.max(sameCount,temp1);
    }
    return seqCount>=4||sameCount>=4;
}
console.log(getBeatifyNumber('15234513960'));

