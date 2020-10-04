function add(a,b){
    // 实现超出整数存储范围的两个大整数相加，参数a和参数b以及函数的返回值都是字符串
    // 给短的字符串补0
    let n1=a.length,n2=b.length;
    for(let i=0;i<Math.max(n1,n2)-Math.min(n1,n2);i++){
        if(n1>n2) b='0'+b;
        if(n1<n2) a='0'+a;
    }
    a=a.split('').reverse();
    b=b.split('').reverse();
    // 创建一个数组，返回结果
    // cnt表示进位信号
    let res=[],cnt=0;
    for(let k=0;k<Math.max(n1,n2);k++){
        let temp=a[k]+b[k]+cnt;
        res.push(temp%10);
        cnt=Math.floor(temp/10);
    }
    return res.reverse().join('')
}
var a = '212323443645769879834242345';
var b = '2056764062873453875236';
console.log(add(a,b));