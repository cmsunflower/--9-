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
    let n = nums.length;
    if(n===0) return [];
    let stack = [],res = [];
    let right=0;
    while(right<n){
        if(stack.length>0&&right-stack[0]>=k) stack.shift();
        while(stack.length>0&&nums[right]>=nums[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(right);
        if(right>=k-1) res.push(nums[stack[0]]);
        right++;
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
[剑指 Offer 27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

二叉树镜像，就是对二叉树做前序遍历的时候，顺便将遍历到的左右进行交换得到的就是最后的镜像二叉树
```javascript
var mirrorTree = function(root) {
    if(root===null) return null;
    let stack = [root];
    while(stack.length>0){
        let node = stack.pop();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        node.right&&stack.push(node.right);
        node.left&&stack.push(node.left);
    }
    return root;
};
```
[547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)


输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2

最终要求得：图上未联通的点位个数

原本打算使用两层for循环，求1的联通区域，但是联通的点与联通区域不同
1. 遍历未被访问的点
2. 遍历到的i层存在1的点(i,j)，交换遍历的位置遍历j层
3. 如果j层存在这样的点，一直交换，深度遍历
遍历结束，就增加一个省份

```js
var findCircleNum = function(isConnected) {
    let h = isConnected.length;
    let visited = new Array(h).fill(false);
    let ans = 0;
    var dfs = (i)=>{
        visited[i] =true;
        for(let j=0;j<h;j++){
            if(!visited[j]&&isConnected[i][j]===1){
                dfs(j);
            }
        }
    }
    for(let i=0;i<h;i++){
        if(!visited[i]) {
            dfs(i);
            ans++;
        }
    }
    return ans;
};
```

[228. 汇总区间](https://leetcode-cn.com/problems/summary-ranges/)

思路：双指针，符合nums[right+1] === nums[right]+1的在区间内，一直迭代
    不符合的，就开始新的区间
    一次迭代，更新right,left指针

```javascript
var summaryRanges = function(nums) {
    let len = nums.length;
    const res = [];
    if(!len) return [];
    let left = 0, right = 0;
    while(right < len){
        while((right + 1 < len) && (nums[right] + 1 === nums[right+1])){
            right++;
        }
        if(right !== left)res.push(`${nums[left]}->${nums[right]}`);
        else res.push(`${nums[right]}`);
        right++;
        left = right;
    }
    return res;
};
```
[剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

后序遍历顺序：左子树->右子树->根节点

搜索二叉树特点： 左子树的val<根节点的val<右子树的val

假设postorder是正确的后序遍历，那么他符合，[0,left]的节点val<postorder[len-1]，[left+1,len-1]的节点>postorder[len-1]

首先，找到当前postorder数组的左右子树
在根据左右子树递归遍历，如果最后遍历到根节点，说明是正确的后序遍历

```javascript
var verifyPostorder = function(postorder) {
    // 最后一个点就是根节点
    let len = postorder.length;
    if(len < 2) return true;
    let root = postorder[len-1];
    let temp = 0,i = 0;
    while(i<len-1&&root>postorder[i]){
        i++;
    }
    let result = postorder.slice(i,len-1).every(x=>x>root);
    return result&&verifyPostorder(postorder.slice(0,i))&&verifyPostorder(postorder.slice(i,len-1));
};
```
[684. 冗余连接](https://leetcode-cn.com/problems/redundant-connection/)

```js
// 创建并查集的类
class UnionFind{
    constructor(n){
        // 初始化，节点和节点的权值
        this.node = new Array(n)
                        .fill()
                            .map((item,idx) =>
                                idx
                            );
        this.rank = new Array(n).fill(0);
    }
    find(x){
        if(x === this.node[x]){
            return x;
        }
        return this.find(this.node[x]);
    }
    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x === y) {
            return;
        }
        if (this.rank[x] < this.rank[y]) {
            this.node[x] = y;
        } else {
            if (this.rank[x] === this.rank[y]) {
                this.rank[x]++;
            }
            this.node[y] = x;
        }
    }
    same(x, y) {
       return this.find(x) ===this.find(y);
    }
}
// n个节点，n-1条边；因此创建节点的时候，是edges.length+1
var findRedundantConnection = function(edges) {
    let len = edges.length;
    if(len ===0 ) return [];
    let node = 0;
    const unionfind = new UnionFind(len+1);
    for (let i = 0; i < len; i++) {
        node = edges[i];
        if(unionfind.same(node[0],node[1])) return node;
        else{
            unionfind.union(node[0],node[1]);
        }
    }
    return [0];
};
```
[剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

```js
var pathSum = function(root, sum) {
    if(!root) return [];
    let  res = [],path = [];
    var dfs = (root, sum) =>{
        path.push(root.val);//选择
        if(root.left==null&&root.right==null&&root.val === sum){ // 判断
            res.push([...path]);
            path.pop();
            return;
        }
        sum -= root.val;
        // 递归
        root.left && dfs(root.left, sum);
        root.right && dfs(root.right, sum);
        // 撤销选择
        path.pop();
    }
    dfs(root,sum);
    return res;
};
```
### 快速排序
```
function quickSort(arr) {
    let len = arr.length;
    let lo = 0, hi = len - 1;
    let sort = (arr, lo, hi) => {
        if (hi <= lo) return;
        let pivot = lo, 
            i = lo,
            j = hi + 1;
        while (true) {
            while (arr[++i] < arr[pivot]){
                if (hi <= i) break;
            }
            while (arr[pivot] < arr[--j]) {
                if (j <= lo) break;
            }
            if (j <= i) break;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // 交换指定的区域
        [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
        sort(arr, lo, j - 1);
        sort(arr, j + 1, hi);
        return arr;
    }
    return sort(arr, lo, hi);   
}
```
[643. 子数组最大平均数 I](https://leetcode-cn.com/problems/maximum-average-subarray-i/)

先算出，第一个k长数组的和，在接着遍历，滑动窗口，加新的一位，减掉原窗口的一位，取最大值
```
var findMaxAverage = function(nums, k) {
   // 前缀和
   let n = nums.length;
   let sum = 0;
   sum = nums.slice(0, k)
        .reduce((prev, cur) => prev += cur);
    let temp = sum;
    for (let i = k; i < n; i++) {
        temp = temp - nums[i-k] + nums[i];
        console.log(temp)
        sum = Math.max(temp, sum);
    }
    return sum / k;
};
```
[101.二叉树的镜像](https://leetcode-cn.com/problems/symmetric-tree/)
递归、迭代两种实现方式

***
/** 递归实现*/
function isSymmetric(root) {
    if (!root) return false;
    return isSame(root.left, root.right);
}
function isSame(L, R) {
    if (!L || !R) return !L&&!R;
    return L.val === R.val 
        && isSame(L.left, R.right)
        && isSame(L.right, R.left);       
}
***

***
/** 迭代实现*/
function isSymmetric(root) {
    if (!root) return false;
    return isSame(root.left, root.right);
}
function isSame(L, R) {
    let t1 = [L],
        t2 = [R];
    let temp1 = null,
        temp2 = null;
    while (t1.length>0 && t2.length>0) {
        temp1 = t1.shift();
        temp2 = t2.shift();
        if (!temp1&&!temp2) continue;
        if (!temp1||!temp2||temp1.val !== temp2.val) return false;
        t1.push(temp1.left);
        t2.push(temp2.right);
        t1.push(temp1.right);
        t2.push(temp2.length);
    }
    return true;
}
***
