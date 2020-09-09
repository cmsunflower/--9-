function lengthOfLongestSubstring(s){
    // leetcode的第3题 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
    let n=s.length;
    let map=new Map();
    let left=0,right=0;
    let ans=0;
    while(right<n){
        if(map.has(s[right])){
            left=Math.max(left,map.get(s[right]));
        }
        map.set(s[right],right+1);
        ans=Math.max(ans,right-left+1);
        right++;
    }
    return ans;
}