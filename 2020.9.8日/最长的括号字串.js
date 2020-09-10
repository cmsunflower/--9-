function longestValidParentheses(s){
    let st=[-1],ans=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='(') st.push(i);
        else{
            st.pop();
            if(st.length){
                ans=Math.max(ans,i-st[st.length-1]);
            }else{
                st.push(i);
            }
        }
    }
    return res;
}
