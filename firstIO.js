var fs = require('fs');
var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var str = buffer.toString();
console.log(str.split("\n").length - 1);
