var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productControllers')
/* GET home page. */
router.get('/product', productControllers);

module.exports = router;
