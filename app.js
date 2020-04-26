const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    let out = {
        name: 'Cristhoper',
        age: 23,
        url: req.url
    };
    res.write(JSON.stringify(out));
    res.end();
}).listen(8080);

console.log("Listen port: 8080")
