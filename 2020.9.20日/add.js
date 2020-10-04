// 什么是柯里化：传递函数一部分参数来调用它，让它返回一个新函数去处理剩下的函数

//柯里化：部分求值,使用闭包实现柯里化

function curry(){
}

// 实现 add(1) 1
// add(1)(2)(3) 6
// add(1)(2)(3)(4) 10

function add(){
    let res=[];
    let args=[].slice.call(arguments);
    let ans=0;
    // 返回最终的求值结果
    let sum=function(){
        let doArgs=[].slice.call(arguments);
        res=args.concat(doArgs);
        let temp=res.reduce((prev,cur)=>prev+cur);
        ans+=temp;
        return sum;
    }
    sum.toString=function(){
        return ans;
    }
    return sum;
}
add(1)(2);
add(2)(3)(6);