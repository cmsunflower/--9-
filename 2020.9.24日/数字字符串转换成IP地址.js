function restoreIpAddress(s){
    var path="";
    var ans=[];
    dfs(s,0,0,ans,path);
    return ans;
}
// k表示层数 u表示到达的节点
function dfs(s,u,k,ans,path){
    // 到达第四层
    if(u==s.length){
        if(k==4){
            ans.push(path.slice(1));
        }
        return;
    }
    if(k>4) return;
    if(s[u]=='0') dfs(s,u+1,k+1,ans,path+'.0');
    else{
        for(let i=u,t=0;i<s.length;i++){
            t=t*10+(s[i]-'0');
            if(t<256) dfs(s,i+1,k+1,ans,path+'.'+t);
            else break;
        }
    }
}