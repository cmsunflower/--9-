function deleteDuplicates(head){
    let curN=head;
    while(curN&&curN.next){
        if(curN.val===curN.next.val) curN.next=curN.next.next;
        else curN=curN.next;
    }
    return head;
}