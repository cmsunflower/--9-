class A{
    start(){
        const x=setTimeout(()=>{
            console.log(this,1);
        },0);
        const y=setTimeout(()=>{
            console.log(this,2);
        },0);
    }
}
const b=new A();
b.start();

let p=new Promise((resolve,reject)=>resolve('1'));
p.then((res)=>{
    console.log('2');
    console.log(res);

    return new Promise(resolve=>{
        console.log('3');
        resolve('4');
        console.log('5');
        return new Promise(resolve=>resolve(6)).then(res=>{
            console.log(res);
            return res;
        })
    }).then(res=>{
        console.log(res);
        return res;
    })
})
p.finally(()=>{
    console.log('7');
}).then((res)=>console.log(res));

function transfer(str){
    let arr=str.split('-');
    for(let i=0;i<arr.length;i++){
        let tempL=arr[i].length;
        if(tempL>=4) arr[i]=arr[i][0]+(tempL-2)+arr[i][tempL-1];
    }
    return arr.join('-');
}
console.log(transfer('elephant-walk'));

// 寻找靓号 按最长连续递增序列思路走
function getBeatifyNumber(nums){
    let n=nums.length;
    // 创建两个方法找靓号 一个连续递增 一个找相同（滑动窗口）
    var seqNumber=function(nums){
        let count=1,temp=1;
        for(let i=1;i<n;i++){
            if(nums[i-1]<nums[i])  temp++;
            else temp=1;
            count=Math.max(count,temp);
        }
        return count>=4;
    }
    var sameNumber=function(nums){
        let count = 1, temp = 1;
        for (let i = 1; i < n; i++) {
            if (nums[i - 1] == nums[i]) temp++;
            else temp = 1;
            count = Math.max(count, temp);
        }
        return count >= 4;
    }
    return seqNumber(nums)||sameNumber(nums);
}
// 测试
console.log(getBeatifyNumber('15332213960'));
// 字符串反转 按照指定位进行 旋转


