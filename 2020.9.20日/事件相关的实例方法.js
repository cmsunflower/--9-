// 源码阅读
// 导入 使用import 使用的是es6的模块化，导入的是文件的引用
// 当遇到import的时候，生成一个只读引用，等到脚本执行的时候，再根据这个只读引用，到被加载的模块中取值
// 指定加载某个输出值，不是整个模块，export显示指定输出代码，不是对象
export function initEventes(vm:Component){
    // 创建一个原型为空的对象
    vm._events=Object.create(null);
    
}
export function eventsMixin(Vue:Class<Component>){
    Vue.prototype.$on=function(event,fn){
        // 将回调函数进行收集
        const vm=this;
        if(Array.isArray(event)){
            for(let i=0,l=event.length;i<l;i++){
                vm.$on(event[i],fn);
            }
        }else{
            // 将回调函数注册到事件列表中
            (vm._events[event]||(vm._events[event]=[])).push(fn);
        }
        return vm;
    }
    // 触发回调函数
    Vue.prototype.$emit=function(event){
        const vm=this;
        let cbs=vm._events[event];
        if(cbs){
            // 触发回调函数的时候 可能会传递参数
            const args=[].slice.call(arguments,1);
            // 遍历回调函数
            for(let i=0,l=cbs.length;i<l;i++){
                // 触发回调函数
                cbs[i].apply(vm,args);
            }
        }
        return vm;
    }
    // 监听一个自定义事件，只触发一次
    Vue.prototype.$once=function(event,fn){
        const vm=this;
        function on(){
            // 先移除event上的所有on方法
            vm.$off(event,on);
            fn.apply(vm,arguments);
        }
        on.fn=fn;
        vm.$on(event,on);
        return vm;
    }
    // 移除监听事件 可传递参数 
    // 传递两个参数 表示删除指定事件的回调函数
    // 只提供时事件 也就是第一个参数 表示移除对应事件的所有回调函数
    // 没有采纳数表示移除上面的所有事件
    Vue.prototype.$off=function(event,fn){
        const vm=this;
        // 如果参数长度为0，移除所有的事件
        if(!arguments.length){
            vm._events=Object.create(null);
            return vm;
        }
        if(Array.isArray(event)){
            for(let i=0,l=event.length;i<l;i++){
                this.$off(event[i]);
            }
            return vm;
        }
        // 如果是单个元素
        const cbs=vm._events[event];
        if(!cbs){
            return vm;
        }
        if(arguments.length==1){
            vm._events[event]=null;
            return vm;
        }
        // 移除 指定事件 和回调的
        if(fn){
            const cbs=vm._events[event];
            let cb;
            let i=cbs.length;
            while(i--){
                cb=cbs[i];
                if(cb==fn||cb.fn==fn){
                    cbs.splice(i,1);
                    break;
                }
            }
        }
        return vm;
    }
}