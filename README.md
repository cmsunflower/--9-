# ----
每日算法记录

#[435.无重叠区间](https://leetcode-cn.com/problems/non-overlapping-intervals/)

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
