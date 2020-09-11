function hexToRgb(str){
    // 十六进制的正则匹配
    var reg=/^#([0-9a-f]{3}|[0-9a-f]{6})$/;
    var str=str.toLowerCase();
    if(str&&reg.test(str)){
        if(str.length===4){
            let colorN='#';
            for(let i=1;i<=4;i++){
                colorN+=str.slice(i,i+1).concat(str.slice(i,i+1));
            }
            str=colorN;
        }
        let colorRgb=[];
        for(let i=1;i+2<=7;i+=2){
            colorRgb.push(parseInt('0x'+str.slice(i,i+2)));
        }
        let res=colorRgb.join(', ');
        return `rgb(${res})`;
    }else{
        return str;
    }
}
// 测试
console.log(hexToRgb('#FFFFFF'));