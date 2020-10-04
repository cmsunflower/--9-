function parse(list){
    let n=list.length;
    // 使用key 用来存储 id value用来存储对象
    let map=new Map();
    for(let i=0;i<n;i++){
        let temp=list[i];
        if(temp.parent==null) map.set(temp.id,temp);
        else{
            if(map.has(temp.parent)){
                let obj=map.get(temp.parent);
                (obj.children||(obj.children=[])).push(temp);
            }
        }
    }
    return [...map.values()];
}
var list=[
    {id:0,parent:null},
    {id:2,parent:0},
    {id:3,parent:0}
];
console.log(parse(list));