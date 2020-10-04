function firstUniqChar(s){
    let arr=new Array(26).fill(0);
    let n=s.length;
    for(let item of s){
        arr[item.charCodeAt()-97]++;
    }
    for(let item of s){
        if(arr[item.charCodeAt()-97]==1) return item;
    }
    return " "
}