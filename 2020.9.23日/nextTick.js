let callbacks=[];
let pending=false;
function flushCallbacks(){
    pending=false;
    const copies=callbacks.slice(0);
    callbacks.length=0;
    for(let i=0;i<copies.length;i++){
        copies[i]();
    }
}
let microTimerFunc
let macroTimeFunc
let useTimerFunc=false;

const p=Promise.resolve();
microTimerFunc=()=>{
    p.then(flushCallbacks);
}
export function nextTick(cb,ctx){
    let _resolve
    callbacks.push(()=>{
        if(cb){
            cb.call(ctx);
        }
    })
}