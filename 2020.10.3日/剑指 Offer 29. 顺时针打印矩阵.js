/*
 * @Author: your name
 * @Date: 2020-10-03 23:20:33
 * @LastEditTime: 2020-10-03 23:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\2020.10.3日\剑指 Offer 29. 顺时针打印矩阵.js
 */
function spiralOrder(matrix){
    let res=[];
    let h=matrix.length;
    if(!h) return res;
    let w=matrix[0].length;
    if(!w) return res;
    let dx=[0,1,0,-1],dy=[1,0,-1,0];
    let visited=new Array(h).fill().map(()=>new Array(w).fill(false));
    for(let k=0,x=0,y=0,d=0;k<h*w;k++){
        res.push(martrix[x][y]);
        visited[x][y]=true;
        let a=x+dx[d],b=y+dy[d];
        if(a<0||a>=h||b<0||b>=w||visited[a][b]){
            d++;
            d%=4;
            a=x+dx[d];
            b=y+dy[d];
        }
        x=a;
        y=b;       
    }
    return res;
}