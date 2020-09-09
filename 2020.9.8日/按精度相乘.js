function accur(a,b){
    let str1=a.toString();
    let str2=b.toString();
    let l1=str1.indexOf('.')===-1?0:str1.length-str1.indexOf('.')-1;
    let l2=str2.indexOf('.')===-1?0:str2.length-str2.indexOf('.')-1;
    let len=l1+l2;
    // return len;
    return parseFloat(( a*b ).toFixed(len));
}
// console.log(accur(0.9,0.001));