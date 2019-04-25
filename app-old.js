const http = require('http');


http.createServer((req,res) => {

    res.write("<h1> Node server </h1>");
    res.end();

}).listen(8080);

console.log(`Listen on port 8080`);