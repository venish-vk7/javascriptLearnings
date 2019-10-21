/**
 * My fist js Deployment application
 * Server To Deploy the JS APP
 * PORT 8080
 */
const http = require('http');
var fs = require('fs');
const port = 5000;

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }).listen(port);
  console.log("app started" , port)