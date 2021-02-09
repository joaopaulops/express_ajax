var express = require('express');
var router = express.Router();
var connMysql = require('../config/dbConn.js')()

/* GET home page. */
router.get('/', function (req, res, next) {
  connMysql.query('select * from usuarios', function (err, result) {
    console.log('dados usuarios: ', result);
    res.render('index', { data: result });
  })
});

router.get('/contatos', function (req, res, next) {
  res.render('contatos', { title: 'Express' });
});

router.get('/editar_contato', function (req, res, next) {
  console.log('parametro: ', Object.keys(req.query).toString());
  var query = Object.keys(req.query).toString()
  connMysql.query('select * from usuarios where id =' + query, function (err, result) {
    res.render('editar_contato', { data: result[0] });
  })
});

router.get('/sobre', function (req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.post('/salvar_usuario', function (req, res, next) {
  var data = req.body
  console.log('conexão ', connMysql);
  connMysql.query('insert into usuarios set ?', data)

  res.send({ result: data });
});

router.put('/editar_usuario', function (req, res, next) {
  var data = req.body
  console.log('corpo ', data.id);
  var { nome, telefone } = data
  var editar = {
    nome,
    telefone
  }
  connMysql.query('update usuarios set ' + (`nome = '${data.nome}', telefone = '${data.telefone}'`) + ' where id =' + data.id)

  res.send({ result: data });
});

module.exports = router;