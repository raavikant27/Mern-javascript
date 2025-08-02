const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = parseInt(n);
  let prime = true;
  if(n < 2) {
    console.log(n + ' is not a prime number');
    readline.close();
    return;
  }

  for(let i = 2; i * i <= n; i++){
    if(n % i == 0){
      console.log(n + ' is not a prime number');
      readline.close();
      return;
    }
  }

  console.log(n + ' is a prime number');
  readline.close();
});