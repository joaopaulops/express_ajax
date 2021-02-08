var mysql = require('mysql')

var connMysql = function(){
    console.log('conectado')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'user_teste'
    })
}


module.exports = function(){
    return connMysql
}