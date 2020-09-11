function floodfill(arr){
    // 题意：判断从[0,0]开始是否有一条路径可以走到最后
    let h=arr.length,w=arr[0].length;
    let visited=new Array(h).fill().map(()=>new Array(w).fill(false));
    var dfs=function(x,y,visited){
        visited[x][y]=true;
        let dx=[0,1,0,-1],dy=[1,0,-1,0];
        for(let i=0;i<4;i++){
            let a=x+dx[i],b=y+dy[i];
            if(a>=0&&a<h&&b>=0&&b<w&&!visited[a][b]&&arr[a][b]=='0') dfs(a,b,visited);
        }
    }
    dfs(0,0,visited);
    if(visited[h-1][w-1]) return true;
    return false;
}
// 测试
console.log(floodfill([[0,0,0],[1,1,0],[0,0,0]]));