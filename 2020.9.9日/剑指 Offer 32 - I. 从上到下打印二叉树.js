function levelOrder(root){
    // 使用队列实现
    if(!root) return [];
    let stack=[root],path=[];
    while(stack.length>0){
        let node=stack.shift();
        path.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return path;
}