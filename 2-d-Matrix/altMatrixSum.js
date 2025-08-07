const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  let mat = [];
  let count = 0;
  readline.on('line', (line) => {
    mat.push(line.split(' ').map(Number));
    count++;
    if(count == n) {
      alternateMatrixSum(mat, n);
      readline.close();
    }
  });
});

function alternateMatrixSum(mat, n) {
  let blackSum = 0;
  let whiteSum = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if((i+j)%2 == 0){
        blackSum += mat[i][j];
      }
      else{
        whiteSum += mat[i][j];
      }
    }
  }
  console.log(blackSum);
  console.log(whiteSum);
}