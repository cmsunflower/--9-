function maxLength(arr){
    // 滑动窗口 来做 使用map
    let map=new Map();
    let n=arr.length;
    let ans=0;
    let left=0,right=0;
    while(right<n){
        if(map.has(arr[right])){
            let left=Math.max(map.get(arr[right]),left);
        }
        ans=Math.max(ans,right-left);
        map.set(arr[right],i+1);
        right++;
    }
    return ans;
}