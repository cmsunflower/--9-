Function.prototype.doBind=function(context){
    let self=this;
    let args=Array.prototype.slice.call(arguments,1);
    let p=function(){};
    var fn=function(){
        let doArgs=Array.prototype.slice.call(arguments);
        return self.apply(this instanceof p?this:context||window,args.concat(doArgs));
    }
    p.prototype=this.prototype;
    console.dir(this);
    fn.prototype=new p();
    return fn;
}
var obj={
    age:2
}
var name = 'tian';
function fn(name) {
    return {
        name:name,
        age:this.age
    }
}
let flag = fn.doBind(obj, 2);
console.log(flag());