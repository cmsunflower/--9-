function sumTree(root, sum) {
    // 使用回溯完成
    let ans = [], path = [];
    var dfs = function (root, sum) {
        path.push(root.val);
        // 结束 递归
        if (root.left == null && root.right == null && root.val= sum) {
            ans.push([...path]);
            path.pop();
            return;
        }
        sum -= root.val;
        if (root.left) dfs(root.left, sum);
        if (root.right) dfs(root.right, sum);
        path.pop();
    }
    dfs(root, sum);
    return ans;
}