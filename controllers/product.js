const products = []; 

exports.getAddProduct = (req,res,next)=> {
    //console.log(`In the another middleware`);
    res.render('add-product', {title: 'Add Product', path:'/admin/add-product',activeAddProduct: true, formCSS: true, productCSS: true})
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
};

exports.postAddProduct = (req,res,next)=> {
    console.log('Reached here');
    products.push({title : req.body.title});
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{

    res.render('shop', {
        prods: products, 
        title: 'Shop', 
        path:'/',
        hasProducts: products.length > 0, 
        activeShop: true, 
        productCSS: true});
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
}