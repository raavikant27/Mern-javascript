function alternateMannerTraversal(mat,M,N){



    let result=[];
    for(let i=0;i<M;i++){
        if(i%2==0){
            for(let j=0;j<N;j++){
                result.push(mat[i][j]);
            }
        
    }else{
        for( let j=N-1;j>=0;j--){
            result.push(mat[i][j]);
        }
    }
    }
    console.log(result.join(' '));
}