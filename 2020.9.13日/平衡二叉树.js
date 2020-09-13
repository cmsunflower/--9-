function isBanlanced(pRoot){
    if(!pRoot) return true;
    let left=height(pRoot.left);
    let right=height(pRoot.right);
    return Math.abs(left-right)<=1&&isBanlanced(pRoot.left)&&isBanlanced(pRoot.right);
}
function height(root){
    if(!root) return 0;
    let left=height(root.left);
    let right=height(root.right);
    return Math.max(left,right)+1;
}