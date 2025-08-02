const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ModifyName(name) {
  // write code here
  return `${name} is a Super Hero`
}

rl.on('line', (name) => {
  console.log(ModifyName(name));
  rl.close();
});