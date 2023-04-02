var express = require('express');
var router = express.Router();
const loginControllers = require('../controllers/loginControllers')
/* GET home page. */
router.get('/login', loginControllers);

module.exports = router;