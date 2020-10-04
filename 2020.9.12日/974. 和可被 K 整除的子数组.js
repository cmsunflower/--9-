function subarraysDivByK(A, K) {
    let n = A.length;
    // 存储前缀和取模之后的结果 前缀和取模可能会存在负数 需要注意
    let arr = new Array(K).fill(0);
    // 前缀和取模为0的 只有1中  0除以任何数 都等于 0
    arr[0] = 1;
    let sum = 0, count = 0;
    for (let i = 0; i < n; i++) {
        sum = (sum + A[i]) % K;
        if (sum < 0) { sum += K; }
        // 先计算当前 到上次出现前缀和的情况 求和
        count += arr[sum];
        // 在对本次+1
        arr[sum]++;
    }
    console.log(arr)
    return count;
}
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));