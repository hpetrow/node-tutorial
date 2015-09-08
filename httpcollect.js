var http = require('http');

function callback(response) {
  var output = "";

  response.setEncoding('utf8');
  response.on('data', function(data) {
    output += data;
  });
  response.on('end', function() {
    console.log(output.length);
    console.log(output);
  })
}

http.get(process.argv[2], callback).on('error', function(e) {
  console.log(e.message);
});
