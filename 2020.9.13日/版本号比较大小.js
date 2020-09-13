function compareVersion(v1,v2){
    let version1=v1.split('.');
    let version2=v2.split('.');
    let len1=version1.length,len2=version2.length;
    let len=Math.max(len1,len2);
    let i=0;
    while(i<len){
       let a=version1[i]==undefined?0:parseInt(version1[i]);
       let b=version2[i]==undefined?0:parseInt(version2[i]);
       if(a<b) return true;
       else if(b<a) return false;
       else i++;
    }
    return true;
}
console.log(compareVersion('1.5.2','1.5'));


// 使用sort进行比较
function versionSort(nums){
    let res=[];
    nums.sort((a,b)=>{
        let v1=a.split('.'),v2=b.split('.');
        let len=Math.max(v1.length,v2.length);
        for(let i=0;i<len;i++){
            let x=v1[i]==undefined?0:parseInt(v1[i]);
            let y=v2[i]==undefined?0:parseInt(v2[i]);
            if(x>y) return 1;
            if(x<y) return -1;
        }
    })
    return nums;
}
console.log(versionSort(['1.45.0', '1.5.2', '1.5', '6', '3.3.3.3.3.3']));