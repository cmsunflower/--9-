for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}// 打印 333 一次输出
// 按顺序打印 0 1 2
for(var i=0;i<3;i++){
   (function(i){
       setTimeout(() => {
           console.log(i)
       }, 1000)
   })(i)
}
// 修改成闭包
for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}
// 等价于
for(var i=0;i<3;i++){
    let j=i;
    setTimeout(()=>console.log(j),1000);
}