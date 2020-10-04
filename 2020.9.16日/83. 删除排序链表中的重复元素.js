function deleteDuplicate(head){
    // 如果头结点出现重复 的话 由于删除的是 后面的节点 所以不用设置虚拟节点
    let cur=head;
    while(cur&&cur.next){
        if(cur.val===cur.next.val) cur.next=cur.next.next;
        else cur=cur.next;
    }
    return head;
}