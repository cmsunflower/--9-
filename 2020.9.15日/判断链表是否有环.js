function hasCycle(head){
    let first=first,second=second;
    while(true){
        if(!first||!first.next) return false;
        fisrt=first.next.next;
        second=second.next;
        if(first==second) return true;
    }
}
class ListNode{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}