var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'burgers_db'
})

connection.connect(function(err) {
    console.log('Database connected.');
})

module.exports = connection;
