Function.prototype.doCall=function(context){
    context.fn=this;
    let args=[...arguments].slice(1);
    let res=context.fn(...args);
    delete context.fn;
    return res;
}
var obj={
    name:2
}
function fn(age){
    return {
        name:this.name,
        age:age
    }
}
console.log(fn.doCall(obj,2,2));