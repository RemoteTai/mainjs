// http module
const https = require('https');

https.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.writeHead('Hello World!');
    res.end();
}).listen(8080);