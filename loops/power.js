const readline = require('readline');
const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});
rl.on('line', (line) => {  const [a, b] = line.split(' ').map(Number); 
     let result = 1;  for (let i = 1; i <= b; i++)
         {    result *= a; 

        }