var express = require('express');
var router = express.Router();
const profileControllers = require('../controllers/profileController')
/* GET home page. */
router.get('/profile', profileControllers);

module.exports = router;
