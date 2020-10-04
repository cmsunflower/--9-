Function.prototype.doBind=function(context){
    // this指向 fn
    var self=this;
    var args=Array.prototype.slice.call(arguments,1);
    var fn=function(){
        var doArgs=Array.prototype.slice.call(arguments);
        //self进行调用 这个this指向的如果是 new创建的话 也就是指向 fn
        // apply绑定在fn上;如果是直接返回的话，
        // 这里的this是绑定到外部函数传入的参数中
        return self.apply(this instanceof fn?this:(context||window),args.concat(doArgs));
    }
    // 这里使用了寄生组合继承方式
    var p=function(){};
    // 此处的self指向 fn
    p.prototype=self.prototype;
    func.prototype=new p();
    return func;
}

var b=fn.doBind(obj);