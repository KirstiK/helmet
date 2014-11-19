var express = require('express');
var router = express.Router();
var path = require('path');


var viewDir = '/Users/Kirsti/Documents/Koodi/helmet/views';

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendfile(path.resolve(viewDir,'index.html'));
});
router.get('/lastenkirjoja', function(req, res) {
  res.sendfile(path.resolve(viewDir,'lastenkirjoja.html'));
});
router.get('/romaaneja', function(req, res) {
  res.sendfile(path.resolve(viewDir,'romaaneja.html'));
});
router.get('/tietokirjoja', function(req, res) {
  res.sendfile(path.resolve(viewDir,'tietokirjoja.html'));
});
router.get('/kaikki', function(req, res) {
  res.sendfile(path.resolve(viewDir,'kaikki.html'));
});

module.exports = router;
