var express = require('express');
var router = express.Router();
const productAddControllers = require('../controllers/product-addControllers')
/* GET home page. */
router.get('/product', productAddControllers);

module.exports = router;
