const a = x => x;// 返回1
const b = x => { x; };// 返回对象必须在外面加上括号
const c = x => ({ x });//返回对象 {x:1}
console.log(a(1));
console.log(b(1));
console.log(c(1));

function comeToSave(m,n,grid){
    let dx=[0,1,0,-1],dy=[1,0,-1,0];
    let visited=new Array(m).fill().map(()=>new Array(n).fill(false));
    var dfs = function (grid, x, y,ans) {
        console.log(ans);
        visited[x][y] = true;
        for (let i = 0; i < 4; i++) {
            let a = x + dx[i], b = y + dy[i];
            if (a > 0 && a < m && b > 0 && b < n && !visited[a][b] && grid[x][y] !== '#'){ 
                if (grid[x][y] == 'S') ans.push([x, y]);
                if (grid[x][y] == 'E') ans.push([x, y]);
                else dfs(grid, x, y,ans);
            }
        }
    }
    let ans=[];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j]&&grid[i][j]!=='#'){ 
                dfs(grid,i,j);
            }
        }
        if(ans.length==2) return true;
    }
    return false;
}
let grid=[['.','E'],['S','.']];
let flag = comeToSave(2, 2, [['#', 'E'], ['S', '#']]);
console.log(flag);