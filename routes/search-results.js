var express = require('express');
var router = express.Router();
const searchResultsController = require('../controllers/search-resultsControllers')
/* GET home page. */
router.get('/busqueda/idproducto/:id', searchResultsControllers);

module.exports = router;
