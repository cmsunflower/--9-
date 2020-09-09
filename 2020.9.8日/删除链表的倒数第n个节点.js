function removeNthFromEnd(head,n){
    let dummy=new ListNode(-1);
    dummy.next=head;
    let first=dummy,second=dummy;
    // 一个节点先走n步，second在开始从前往后走，这样second与first之间就相差n步，
    //当first走到走后一步的时候，second就走到倒数n+1步
    while(n--) first=first.next;
    while(first.next){
        first=first.next;
        second=second.next;
    }
    // 最后在重新进行一次指向就可以了
    second.next=second.next.next;
    return dummy.next;
}