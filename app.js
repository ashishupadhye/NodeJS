var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('This is first Application of NodeJS');
}).listen(2833);