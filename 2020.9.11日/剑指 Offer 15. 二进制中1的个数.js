function hammingWeight(n){
    let res=0;
    while(n){
        res++;
        n=n&(n-1);
    }
    return res;
}
// 测试
console.log(hammingWeight(00000000000000000000000000001011));
console.log(parseInt('00000000000000000000000000001011',2));
console.log(1011-1);