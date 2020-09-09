function isValid(s){
    let map=new Map([']','['],['}','{'],[')','(']);
    let st=[];
    if(s.length%2!==0) return false;
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])) st.push(s[i]);
        else{
            if(map.get(s[i])!==st[st.length-1]) return false;
            else st.pop();
        }
    }
    return st.length===0;
}