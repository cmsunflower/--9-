function hexRadmon(){
    let len=Math.random()<0.5?3:6;
    const colors=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let colorhex='';
    for(let i=0;i<len;i++){
        colorhex+=colors[Math.floor(Math.random()*16)];
    }
    return '#'+colorhex;
}
console.log(hexRadmon());