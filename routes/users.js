var express = require('express');
var router = express.Router();
var userController = require ('../controller/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//userMiddleware.isLogin
router.post ('/login', userController.login )

module.exports = router;
