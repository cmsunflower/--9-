function getEnd(n,m,grid){
    let nums=new Array(5).fill(0);
    let visited=new Array(n).fill().map(()=>new Array(m).fill(false));
    let sx,sy;
    let ex,ey;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]=='S')  [sx,sy]=[i,j];
            else if(grid[i][j]=='G') [ex,ey]=[i,j];
            // 记录要是的个数
            else if(grid[i][j]>='a'&&grid[i][j]<='e') nums[s[i][j].charCodeAt()-97]++;
        }
    }
    var bfs=function(grid,x,y){
        // key统计走过路径的钥匙集合
        let key=new Array(5).fill(0);
        visited[x][y]=true;
        let stack=[];
        stack.push([x,y]);
        // 访问过的节点
        let door=[];
        let dx=[0,1,0,-1],dy=[1,0,-1,0];
        while(1){
            if(stack.length==0) return false;
            while(stack.length){
                let temp=q.shift();
                for(let i=0;i<4;i++){
                    let a=temp[0]+dx[i],b=temp+dy[i];
                    if (check(a, b) && !visited[a][b]) {
                        visited[a][b] = true;
                        if (grid[a][b] >= 'A' && grid[a][b] <= 'E') {
                            // 遍历到门，将门假如队列
                            door.push([a, b]);
                        } else {
                            // 找到钥匙
                            if(grid[a][b]>='a'&&grid[a][b]<='e'){
                                key[grid[a][b].charCodeAt()-97]++;
                            }
                            stack.push([a,b]);
                            if(a==ex&&b==ey) return true;
                        }
                    }
                }
                
            }
            let i=0;
            while(i<door.length){
                let xx=door[i][0],yy=door[i][1];
                if(key[grid[xx][yy].charCodeAt()-97]==nums[grid[xx][yy].charCodeAt()-97]){
                    stack.push([xx,yy]);
                    // 钥匙够了
                    door.split(i,1);
                }else{
                    i++;
                }
            }
        }
    }
    var check=function(x,y){
        if(x<0||x>=n||y<0||y>=m||grid[x][y]=='X') return false;
        return true;
    }
    return bfs(grid,sx,sy);
}

let [n0,m0]=readline().split(' ');
let [n,m]=[n0-0,m0-0];



















var [n0, m0] = readline().split(' ');
var [n, m] = [n0 - 0, m0 - 0];
var grid = [];
var i = 0;
while (line = readline()) {
    var token = line.split('');
    grid.push(token);
    i++;
}





function getEnd(n, m, grid) {
    let nums = new Array(5).fill(0);
    let visited = new Array(n).fill().map(() => new Array(m).fill(false));
    let sx, sy;
    let ex, ey;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 'S') [sx, sy] = [i, j];
            else if (grid[i][j] == 'G') [ex, ey] = [i, j];
            // 记录要是的个数
            else if (grid[i][j] >= 'a' && grid[i][j] <= 'e') nums[grid[i][j].charCodeAt() - 97]++;
        }
    }
    var bfs = function (grid, x, y) {
        // key统计走过路径的钥匙集合
        let key = new Array(5).fill(0);
        visited[x][y] = true;
        let stack = [];
        stack.push([x, y]);
        // 访问过的节点
        let door = [];
        let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
        while (1) {
            while (stack.length > 0) {
                let temp = stack.shift();
                for (let i = 0; i < 4; i++) {
                    let a = temp[0] + dx[i], b = temp[1] + dy[i];
                    if (check(a, b) && !visited[a][b]) {
                        visited[a][b] = true;
                        if (grid[a][b] >= 'A' && grid[a][b] <= 'E') {
                            // 遍历到门，将门假如队列
                            door.push([a, b]);
                        } else {
                            // 找到钥匙
                            if (grid[a][b] >= 'a' && grid[a][b] <= 'e') {
                                key[grid[a][b].charCodeAt() - 97]++;
                            }
                            stack.push([a, b]);
                            if (a == ex && b == ey) return true;
                        }
                    }
                }

            }
            let i = 0;
            while (i < door.length) {
                let xx = door[i][0], yy = door[i][1];
                if (key[grid[xx][yy].charCodeAt() - 97] == nums[grid[xx][yy].charCodeAt() - 97]) {
                    stack.push([xx, yy]);
                    // 钥匙够了
                    door.split(i, 1);
                } else {
                    i++;
                }
            }
        }
        return false;
    }
    var check = function (x, y) {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 'X') return false;
        return true;
    }
    return bfs(grid, sx, sy);
}