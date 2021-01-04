# ----
每日算法记录

[435.无重叠区间](https://leetcode-cn.com/problems/non-overlapping-intervals/)

1. 使用贪心算法
2. 利用区间的右端点排序，重叠的区间尽可能少，为后面的活动留出更多的空间
3. 当区间发生重叠，将返回结果++，否则，将比较值换成当前区间的intervals[1]

```javascript
var eraseOverlapIntervals = function(intervals) {
    // 按照区间的左端点进行排序
    let len = intervals.length;
    if(!len) return 0;
    // 按结尾排序，给后面留出更大的空间排序
    intervals.sort((a,b)=>a[1]-b[1]);
    let val = intervals[0][1];
    let ans=0;
    for(let i=1;i<len;i++){
        let temp = intervals[i];
        if(val>temp[0]){
            ans++;
        }else{
            val = temp[1];
        }
    }
    return ans;
};
```
[239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)

滑动窗口解决，使用双端队列，队列单调递减（也就是根据数值大小排列，相当于优先级）
```jsvascript
var maxSlidingWindow = function(nums, k) {
    let  len = nums.length;
    let left = 0,right=0;
    const stack = [];
    const res =[];
    while(right<len){
        if(stack.length&&right-stack[0]>=k) 
        while(stack.length&&nums[right]>=nums[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(right)
        if(right>=k-1) res.push()
    }
    return res;
};
```
[509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

尾调递归优化

每次递归到下一个时候，上一个结束运算

下一次的运算不会影响到上一次的运算，这样就不会出现爆栈的问题
```javascript
var fib = function(n){
    return fibT(0,1,n);
}
function fibT(a,b,n){
    if(a==0) return 0;
    return fibT(b,a+b,n-1);
}
```
