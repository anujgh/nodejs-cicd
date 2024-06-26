var express = require('express');
const { userList } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userList);

module.exports = router;
