var arr=[1, 2, 3, {}, 3, {}, NaN, NaN, undefined];
var obj={};
var temp;
for(let i=0;i<arr.length;i++){
    temp=arr[i];
    if(obj[typeof temp+temp]) continue;
    else obj[typeof temp+temp]=temp;
}
console.log([...Object.values(obj)]);