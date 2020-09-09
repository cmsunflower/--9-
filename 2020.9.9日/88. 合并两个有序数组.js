function merge(A,m,B,n){
    // 两个指针，从后向前依次遍历
    let i=m+n-1;
    m--;
    n--;
    while(m>=0&&n>=0){
        if(A[m]<=B[n]) A[i--]=B[n--];
        else A[i--]=A[m--];
    }
    // 由于A作为输出数组
    // 如果A没有提前结束，直接也就输出不用比较了
    // 如果B没有提前结束，就需要将B中的内容放到A中去，直接放，已经和A比较完了
    while(n>=0){
        A[i--]=B[n--];
    }
    return A;
}