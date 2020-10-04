// 生成一个render函数
let vroot = {
    tag: "div",
    children: [
        { tag: undefined, data: undefined, value: "文本节点", type: 3, children: [] },
        {
            tag: "div", data: { title: "div-box" }, type: 1, value: undefined,
            children: [{
                data: undefined, tag: undefined, type: 3, value: "box", children: []
            }]
        }
    ],
    data: { name: "name", class: "class" },
    value: undefined,
    type: 1
}
function render(vnode){
    let type=vnode.type;
    let _node=null;
    if(type==3){
        return document.createElement(vnode.text);
    }
    // 元素节点
    else if(type==1){
        _node=document.createElement(vnode.tag);
        let data=vnode.data;
        let attrName,attrValue;
        Object.keys(data).forEach(key=>{
            attrName=key;
            attrValue=data[key];
            _node.setAttribute(attrName,attrValue);
        })
        let children=node.children;
        children.forEach(subvnode=>{
            _node.appendChild(render(subvnode));
        })
    }
    return _node;
}
// let root=render(vroot);
// document.getElementById('root').appendChild(root);

var obj={
    tag:'div',
    children:[
        '123',
        {
            tag:'span',
            children:[
                '123'
            ]
        }
    ]
}
function render2(node){
    if(typeof obj=='string'){
        return node;
    }
    else if(typeof node==='object'&&node!==null){
        // 解析 tag
        let tag=obj.tag;
        let _node=document.createElement(tag);
        let children=obj.children;
        children.forEach(item=>{
            _node.appendChild(render2(item));
        })
        return _node;
    }else{
        throw new Errow('please input valid node');
    }
}
console.log(render2(obj));
// var div=document.getElementById('root');
// div.appendChild(render2(obj));