const express= require('express');
const path = require('path');
//const rootDir = require('../util/path');

const router = express.Router();

const productController = require('../controllers/product');

router.get('/',productController.getProducts);

module.exports = router;