function lowestCommonAncester(root,p,q){
    if(!root||root==p||root==q) return root;
    let left =lowestCommonAncester(root.left,p,q);
    let right = lowestCommonAncester(root.right, p, q);
    if(left==null&&right==null) return null;
    if(left==null) return right;
    if(right==null) return left;
    return root;
}
