function maxProfit(prices){
    let n=prices.length;
    let dp=new Array(n).fill(0);
    for(let i=1,minv=prices[0];i<n;i++){
        dp[i]=Math.max(dp[i-1],prices[i]-minv);
        minv=Math.min(prices[i],minv);
    }
    return dp[n-1];
}
console.log(maxProfit([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9]));