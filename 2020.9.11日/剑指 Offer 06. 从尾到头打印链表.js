function printList(head){
    let temp=[],ans=[];
    while(head){
        ans.push(head.val);
        head=head.next;
    }
    while(ans.length){
       temp.push(ans.pop()) ;
    }
    return temp;
}
let i=00000000000000000000000000001011;
console.log(i-1);
var j=0;
// while(i){
//     j++;
//     j&=(j-1);
//     console.log(j);
// }
console.log((0x8000000000-1)&(0x80000000).toString(2))