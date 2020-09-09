function replaceSpace(s){
    let size=0;
    let n=s.length;
    // 传建一个数组长度是原来的3倍
    let arr=new Array(n*3).fill(0);
    for(let i=0;i<n;i++){
        if(s[i]===' '){
            // 如果是空格的时候分三次换成指定的值
            arr[size++]='%';
            arr[size++]='2';
            arr[size++]='0';
        }else{
            arr[size++]=s[i];
        }
    }
    //最后将生成的结果拼接完成
    return arr.slice(0,size).join('');
}