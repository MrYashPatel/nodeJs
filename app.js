const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer((req,res) => {
    console.log(req.url,req.headers, req.method);
    const url= req.url;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Horn</title></head>');
        res.write('<body>Beep Beep</body>');
        res.write('</html>');
        res.end();
    }
    //process.exit();
    res.write('<html>');
    res.write('<head><title>Pom</title></head>');
    res.write('<body>Pom Pom</body>');
    res.write('</html>');
    res.end();
});


server.listen(3000);