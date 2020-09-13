function minDepth(root){
    // root节点的上一层是叶子节点
    if(!root) return 0;
    let left=minDepth(root.left);
    let right=minDepth(root.right);
    // 有一个子树为空
    if(!root.left||!root.right) return left+right+1;
    // 两个子树都不为空的情况
    return Math.min(left,right)+1;
}