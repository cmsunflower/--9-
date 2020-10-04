// instanceof 用来检测 constructor.prototype是否存在于参数object的原型链上

// object  instancof constructor

// 实现instanceof

function isInstance(obja,objb){
    obja=obja.__proto__;
    objb=objb.prototype;
    while(true){
        if(obja==null) return false;
        if(obja==objb) return true;
        obja=obja.__proto__;
    }
}

let arr=[];
arr instanceof Array