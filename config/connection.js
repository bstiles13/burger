var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'burgers_db'
});
}

connection.connect(function(err) {
    console.log('Database connected.');
})

module.exports = connection;
