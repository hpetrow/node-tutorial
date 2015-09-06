// prints a list of files in a directory, filtered by file extension
// command line takes a directory name as first arg and file extension as second arg.

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = "." + process.argv[3];

function callback(err, list) {
  var i;

  if (err) { return console.error(err); }

  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === ext) {
      console.log(list[i]);
    }
  }
}

fs.readdir(dirPath, callback);
