function generatePranthesis(n){
    // 产生左分支 当还有左括号的时候，才能产生
    // 产生右分支 还有右括号的时候，才能产生；并且右括号的个数如果小于左括号的个数，既不能继续下去了
    // 什么时候结束 左右括号都用完就说明结束了
    let ans=[];
    var dfs=function(path,left,right){
        if(left==0&&right==0) ans.push(path);
        if(left>0) dfs(path+'(',left-1,right);
        if(right>0) dfs(path+')',left,right-1);
        if(right<left) return;
    }
    dfs('',n,n);
    return ans;
}