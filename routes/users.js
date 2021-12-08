var express = require('express');
var router = express.Router();
// var userController = require ('../controller/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("yahahahahahah")
  res.send('respond with a resource');
});

//userMiddleware.isLogin
const {
  task,
} = require ('../controller/userController');


router.post ('/task', task );

module.exports = router;
