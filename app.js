const http = require('http');

const express = require('express');

const app = express();

app.use('add-product/',(req,res,next)=> {
    console.log(`In the another middleware`);
    res.send("The Product Page");
    next();
});

app.use('/',(req,res,next)=> {
    console.log(`In the another middleware`);
    res.send("Hello from Express");
});



const server = http.createServer(app);

server.listen(3000);