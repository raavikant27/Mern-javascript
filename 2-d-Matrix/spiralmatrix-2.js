function spiralMatrix(matrix,n,m){
    let result=[];
    let top=0,bottom=n-1;
    let left=0,right=m-1;
    while(top<=bottom && left<=right){
        // Traverse Down (leftmost column)
        for(let i=top;i<=bottom;i++){
            result.push(matrix[i][left]);
        }
        left++;
        if(left>right) break;
        //traverse right (bottom row)
        for(let j=left;j<=right;j++){
            result.push(matrix[bottom][j]);
        }
        bottom--;
        if(top>bottom) break;
        //traverse up(rightmost column)
        for(let i=bottom;i>=top;i--){
            result.push(matrix[i][right]);
        }
          right--;
          if(left>right) break;
          //traverse left(top row)
          for(let j=right;j>=left;j--){
            result.push(matrix[top][j];)
          }
          top++
    }
    return result;
}