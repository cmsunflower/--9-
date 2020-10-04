function print(){
    let i=0;
    let timer=null;
    var fn=function(){
        if(i==3) return;
        console.log(i++);
        let prev=timer;
        timer=setTimeout(fn,1000);
        clearTimeout(prev);
    }
    return setTimeout(fn,1000);
}
print();