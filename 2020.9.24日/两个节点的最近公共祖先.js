class TreeNode{
    constructor(x){
        this.val=x;
        this.left=null;
        this.right=null;
    }
}
// 最近公共祖先的意思是：节点 o1和节点 o2 
function lowestCommonAncestor(root,o1,o2){
    if(root==null||root==o1||root==o2) return root;
    let left=lowestCommonAncestor(root.left,o1,o2);
    let right=lowestCommonAncestor(root.right,o1,o2);
    if(left==null&&right==null) return null;
    if(left==null) return right;
    if(right==null) return left;
    return root;
}