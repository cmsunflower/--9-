/**
 * @name: 实现Promise.all
 * @param {type} 
 * @return {type} 
 */
function doPromiseAll(promises){
    let count=0;
    let cbLists=[];
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,idx)=>{
            promise.then(res=>{
                cbLists[idx]=res;
                count++;
                count == promises.length && resolve(cbLists);
            },err=>{
                reject(err);
            })
        })
    })
}
// 实现链式调用
let p1 = new Promise(()=>setTimeout(()=>console.log(1),300));
let p2 = new Promise(()=>setTimeout(()=>console.log(2),300));
let p3 = new Promise(()=>setTimeout(()=>console.log(3),100));
let p = [p1,p2,p3];
// 想发送请求一样 这里的串行指的是 那个先处理完 那个先响应 最终那个就提前执行 后面的派对执行
function composeAsync(p){
    p.reduce((pre,cur)=>pre.then(cur),Promise.resolve());
}
composeAsync(p);
// let res=[p1,p2,p3].reduce((prev,cur)=>prev.then(cur),Promise.resolve());
// console.log(res);

