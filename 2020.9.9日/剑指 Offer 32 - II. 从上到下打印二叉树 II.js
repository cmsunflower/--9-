function levelOrder(root){
    if(!root) return [];
    let stack=[root],path=[];
    while(stack.length>0){
        let temp=[];
        for(let i=0,len=stack.length;i<len;i++){
            let node=stack.shift();
            temp.push(node.val);
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        path.push(temp);
    }
    return path;
}