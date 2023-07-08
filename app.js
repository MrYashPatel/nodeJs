const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).render('404',{title : 'Page Not Found', path:''});
});

const server = http.createServer(app);

server.listen(3000);