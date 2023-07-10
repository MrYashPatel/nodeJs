const Product = require('../model/product');

exports.getAddProduct = (req,res,next)=> {
    //console.log(`In the another middleware`);
    res.render('add-product', {
        title: 'Add Product',
        path:'/admin/add-product',
        activeAddProduct: true, 
        formCSS: true, 
        productCSS: true
    })
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
};

exports.postAddProduct = (req,res,next)=> {
    console.log('Reached here');
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{

    const products = Product.fetchAll(products =>{
        res.render('shop', {
            prods: products, 
            title: 'Shop', 
            path:'/',
            hasProducts: products.length > 0, 
            activeShop: true, 
            productCSS: true});
    });
    
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
}