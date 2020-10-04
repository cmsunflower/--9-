// 借用父类构造函数 使用父类实例上的属性和方法
// 使用原型式继承，继承父类的原型对象 砍掉实例和方法
function initObj(obja,objb){
    // 拥有 prototype属性
    let p=function(){};
    p.prototype=objb.prototype;
    obja.prototype=new p();
}
function animal(name){
    this.name=name;
}
animal.prototype.sayName=function(){
    console.log(this.name);
}
function line(name,age){
    animal.call(this,name);
    this.age=age;
}
initObj(line,animal);
let l=new line('line','2');
l.sayName();
console.log(l.name,l.age);
console.dir(animal.prototype);
animal.prototype={
    name:2,
    age:2
}
l.sayName();
console.dir(animal.prototype);