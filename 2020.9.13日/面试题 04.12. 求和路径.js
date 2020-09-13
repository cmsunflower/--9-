function pathSum(root,sum){
    let res=0;
    // 要求是 任意一个点到 节点的和等于sum 不一定要是根节点到叶子节点 或者 非要是叶子节点结束
    var preOrder=function(root){
        if(!root) return;
        dfs(root,sum);
        preOrder(root.left);
        preOrder(root.right);
    }
    var dfs=function(root,sum){
        if(!root) return;
        if(sum==root.val){
            res++;
        }
        sum-=root.val;
        dfs(root.left,sum);
        dfs(root.right,sum);
        sum+=root.val;
    }
    preOrder(root);
    return res;
}