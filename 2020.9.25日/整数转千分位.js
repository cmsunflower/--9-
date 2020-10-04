// 正则表达式
// 保留两位小数 X.toFixed(2);
function toThousand(str){
    let res=[];
    var arr=str.split('').reverse();
    for(let i=0,len=arr.length;i<len;i++){
        if(i%3==0&&i!==0){
            res.push(',');
        }
        res.push(arr[i]);
    }
    return res.reverse().join('');
}
console.log(toThousand('12345678'));