const express= require('express');
const path= require('path');

const router = express.Router();

//GET add product
router.get('/add-product',(req,res,next)=> {
    console.log(`In the another middleware`);
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

//POST add product
router.post('/add-product',(req,res,next)=> {
    console.log('Reached here');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;