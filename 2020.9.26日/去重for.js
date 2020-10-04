var arr = [1, 2, 3, {}, 3, {}, NaN, NaN, undefined];
var res=[];
var n=arr.length;
for(let i=0;i<n;i++){
    if(!res.includes(arr[i])) res.push(arr[i]);
}
console.log(res);