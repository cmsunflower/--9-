let eventList={};
function $on(event,cb){
    // 现在对象中找到event
    if(!eventList[event]){
        eventList[event]=[];
    }
    eventList[event].push(cb);
}
function $emit(event){
    // 触发指定的事件
    if(eventList[evevnt]){
        let arr=eventList[event];
        arr.forEach(item=>item());
    }
}
function $off(event,fn){
    //移除所有的事件
    if(eventList[event]){
        let len=eventList[event].length;
        let i=len;
        while(i--){
            let cb=eventList[event][i];
            if(cb==fn) eventList[event].splice(i,1);
        }
    }
}
// 只执行一次的话
function $once(event,fn){
    function on(){
        $off(event,on);
        // 执行这个函数
        fn.apply(this,arguments);
    }
    on.fn=fn;
    // 使用进行注册
    $on(event,on);
}