const singalModel=(function(){
    // 隐藏的构造函数
    function singalFunction(){}
    // 未初始化的对象
    let single;
    return {
        getIntance:function(){
            if(!single){
                single=new singalFunction();
            }
            return single;
        }
    }
})()