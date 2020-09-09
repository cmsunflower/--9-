function fib(n){
    // 最后要取模，防止溢出
    let n0=0,n1=1;
    if(n==0) return n0;
    let sum=0;
    for(let i=1;i<n;i++){
        sum=n1+n0;
        n0=n1;
        n1 = sum % 1000000007;
    }
    return n1;
}