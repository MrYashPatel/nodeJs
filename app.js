const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('./controllers/error');

const app = express();



const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRouter);

app.use(errorController.get404);

const server = http.createServer(app);

server.listen(3000);