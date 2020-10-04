let obj={};
let el=document.querySelector('#el');
let txt=document.querySelector('#txt');
Object.defineProperty(obj,'foo',{
    set:function(newValue){
        Text.innerHTML=newValue;
    },
    get:function(){
        return this.foo;
    }
})
el.addEventListener('input',e=>{
    obj.foo=e.target.value;
})