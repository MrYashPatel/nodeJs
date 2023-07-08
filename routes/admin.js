const express= require('express');
const path= require('path');
const router = express.Router();

const products = []; 

//GET add product
router.get('/add-product',(req,res,next)=> {
    //console.log(`In the another middleware`);
    res.render('add-product', {title: 'Add Product', path:'/admin/add-product',activeAddProduct: true, formCSS: true, productCSS: true})
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

//POST add product
router.post('/add-product',(req,res,next)=> {
    console.log('Reached here');
    products.push({title : req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;