/*
 * @Author: cmsunflower
 * @Date: 2020-10-03 22:10:01
 * @LastEditTime: 2020-10-03 22:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\2020.10.3日\101. 对称二叉树.js
 */
function isSymmetric(root){
    return check(root,root);
}
function check(p1,p2){
    if(p1==null&&p2==null) return true;
    if(!p1||!p2) return false;
    return (p1.val==p2.val)&&check(p1.left,p2.right)&&check(p1.right,p2.left);
}

// 迭代实现
function isSymmetric1(root){
    return check2(root,root);
}
function check2(p1,p2){
    let st1=[p1],st2=[p2];
    while(st1.length&&st2.length){
        let tmp1=st1.shift(),tmp2=st2.shift();
        if(!tmp1&&!tmp2) continue;
        if(!tmp1||!tmp2||tmp1.val!=tmp2.val) return false;
        st1.push(tmp1.left);
        st2.push(tmp2.right);
        st1.push(tmp1.right);
        st2.push(tmp2.left);
    }
    return true;
}