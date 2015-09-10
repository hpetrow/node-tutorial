var http = require('http');
var results = [];
var count = 2;
var i;

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

function httpGet(index) {
  http.get(process.argv[index], function(response) {
    results[index] = "";

    response.setEncoding('utf8');
    response.on('data', function(data) {
      results[index] += data;
    });
    response.on('end', function() {
      count++;
      if (count == process.argv.length) {
        printResults();
      }
    });
  });
}

for (i = 2; i < process.argv.length; i++) {
  httpGet(i);
}

// LEARNYOUNODE SOLUTION

// var http = require('http');
// var bl = require('bl');
// var results = [];
// var count = 0;

// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i]);
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) {
//         return console.error(err);
//       }

//       results[index] = data.toString();
//       count++;

//       if (count == 3) {
//         printResults();
//       }
//     }));
//   });
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i);
// }
