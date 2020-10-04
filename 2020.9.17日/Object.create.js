function object(obj){
    // 构造函数
    function F(){};
    F.prototype=obj;
    // 返回实例
    return new F();
}