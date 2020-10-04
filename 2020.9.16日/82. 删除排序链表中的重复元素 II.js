function deleteDuplicate(head){
    // 题意 删除链表中重复的元素 只保留没有重复出现的数字
    // 使用三个指针进行操作
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy,cur=head;
    while(cur&&cur.next){
        if(cur.val!==cur.next.val){
            pre=cur;
            cur=cur.next;
        }else{
            while(cur&&cur.next&&cur.val==cur.next.val) cur=cur.next;
            pre.next=cur.next;
            cur=cur.next;
        }
    }
    return dummy.next;
}