function BooleanMatrixProblem(m,n,mat){
    let rowsToConvert=new Array(m).fill(false);


    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]==1){
                rowToCovert[i]==true;
                break;
            }
        }
    }

    for(let i=0;i<m;i++){
        if(rowsToConvert[i]){
            for(let j=0;j<n;j++){
                mat[i][j]=1;
            }
        }
    }
    return mat;
}