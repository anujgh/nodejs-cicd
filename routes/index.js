var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res) {
  res.json({
    msg: 'Hii, This is from home route'
  })
})

router.get('/test', function(req, res) {
  res.json({
    msg: 'Hii, This is from test route....'
  })
})

  
router.get('/abc', function(req, res) {
  res.json({
    msg: 'Hii, This is from abc route----------'
  })
})

module.exports = router;
