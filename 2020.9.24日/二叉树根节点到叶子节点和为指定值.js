function pathSum(root,sum){
    let ans=[];
    let path=[];
    var dfs=function(root,sum,path){
        path.push(root.val);
        if(sum==root.val){
            ans.push(path);
            path.pop();
            return;
        }
        sum-=root.val;
        if(root.left) dfs(root.left,sum,path);
        if(root.right) dfs(root.right,sum,path);
        path.pop();
        sum+=root.val;
    }
    dfs(root,sum,path);
    return ans;
}