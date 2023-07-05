const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send("Page not found");
});

const server = http.createServer(app);

server.listen(3000);