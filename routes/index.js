var express = require('express');
var router = express.Router();
var connMysql = require('../config/dbConn.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contatos', function(req, res, next) {
  res.render('contatos', { title: 'Express' });
});
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});
router.post('/salvar_usuario', function(req, res, next) {
  var data = req.body
  console.log(data)
  var consql = connMysql()()
  consql.query('insert into usuarios set?', data)
  
  res.send({result: 'data'});
});

module.exports = router;
