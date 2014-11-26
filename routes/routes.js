var express = require('express');
var router = express.Router();
var path = require('path');


var viewDir = '/Users/Kirsti/Documents/Koodi/helmet/views';

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.render('index', {title: 'Alkusivu'});
});
router.get('/lastenkirjoja', function(req, res) {
  res.render('lastenkirjoja');
});
router.get('/romaaneja', function(req, res) {
  res.render('romaaneja');
});
router.get('/tietokirjoja', function(req, res) {
  res.render('tietokirjoja');
});
router.get('/kaikki', function(req, res) {
  res.render('kaikki');
});

module.exports = router;
