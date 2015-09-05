var fs = require('fs');
var filePath = process.argv[2];

function callback(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.split("\n").length - 1);
}

fs.readFile(filePath, 'utf8', callback);
