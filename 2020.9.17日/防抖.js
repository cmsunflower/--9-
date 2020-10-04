// 防抖：事件没触发n秒后在执行回调，如果在n秒内事件又被触发，则重新计时；
// 使用在点击请求上，避免因为用户的多次点击向后端发送多次请求
// 
function debounce(fn,wait){
    let timer=null;
    return function(){
        let context=this;
        let args=[...arguments];
        if(timer){ clearTimeout(fn,wait);timer=null;}
        timer=setTimeout(()=>fn.apply(context,args),wait);;
    }
}