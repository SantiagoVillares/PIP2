var express = require('express');
var router = express.Router();
const searchResultsController = require('../controllers/search-resultsControllers')
/* GET home page. */
router.get('/product', searchResultsControllers);

module.exports = router;
