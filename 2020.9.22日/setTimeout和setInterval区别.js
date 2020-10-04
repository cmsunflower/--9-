function testThis(){
    var a=123;
    setTimeout(()=>{
        console.log(this.a);
    })
}
testThis();
// 使用setTimeout实现setInterval
setTimeout(function(){
    setTimeout(arguments.callee,interval);
},interval)


// 使用setTimeout实现setInterval
function doSetInterval(cb,interval){
    let timerId=null;
    var fn=function(){
        cb();
        const prev=timerId;
        timerId=setTimeout(fn,timerId);
        clearTimeout(prev);
    }
    return setTimeout(fn,interval);
}
doSetInterval(()=>console.log(2),1000);
