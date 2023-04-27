const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input+"??!")