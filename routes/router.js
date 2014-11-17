var express = require('express');
var router = express.Router();
var path = require('path');


var viewDir = '/Users/Kirsti/Documents/Koodi/helmet/views';

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendfile(path.resolve(viewDir,'index.html'));
});

module.exports = router;
