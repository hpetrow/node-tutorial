var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket) {
  socket.end(datetime());
});

function datetime() {
  var date = new Date();
  return date.getFullYear() +
    '-' + format(date.getMonth() + 1) +
    '-' + format(date.getDate()) +
    ' ' + format(date.getHours()) +
    ':' + format(date.getMinutes()) +
    '\n';
}

function format(date) {
  return date < 10 ? '0' + date : date;
}

server.listen(port);
