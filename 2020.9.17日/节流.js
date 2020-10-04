// 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行
// 如果在同一个单位时间内某事件被触发多次，只能有一次生效
// 使用节流降低事件调用的频率
function throttle(fn,wait){
    let previous=Date.now();
    return function(){
        let now=Date.now();
        let context=this;
        let args=[...arguments];
        if(now-previous>=wait) {
            previous=Date.now();
            return fn.apply(context,args);
        }
    }
}