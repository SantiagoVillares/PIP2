var express = require('express');
var router = express.Router();
const registerControllers = require('../controllers/registerControllers')
/* GET home page. */
router.get('/register', registerControllers);

module.exports = router;