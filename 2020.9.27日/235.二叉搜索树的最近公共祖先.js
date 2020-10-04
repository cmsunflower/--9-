function lowerCommonAncestor(root,p,q){
    // 先要在左右子树中找到p q节点
    if(root==null) return null;
    if(root.val>p.val&&root.val<q.val) return root;
    if(root.val>p.val&&root.val>q.val) return lowerCommonAncestor(root.left,p,q);
    if(root.val<p.val&&root.val<q.val) return lowerCommonAncestor(root.right,p,q);
    return root;
}