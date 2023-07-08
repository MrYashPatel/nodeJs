const express= require('express');
const path= require('path');
const router = express.Router();
const productController = require('../controllers/product');

//GET add product
router.get('/add-product',productController.getAddProduct);

//POST add product
router.post('/add-product',productController.postAddProduct);

module.exports = router;