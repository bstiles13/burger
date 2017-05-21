var connection = require('./connection.js');

var orm = {
    all: function(cb) {
        connection.query('SELECT * FROM burgers', function(err, data) {
            cb(data);
        });
    },
    create: function(table, name, status, cb) {
        var query = 'INSERT INTO ' + table + ' (burger_name, devoured) VALUES ';
        query += '("' + name + '", ' + status + ')';
        console.log(query);

        connection.query(query, function(err, data) {
            if (err) throw err;
            cb();
        })
    },
    update: function(id, cb) {
        var query = 'UPDATE burgers SET devoured = 1 WHERE id = ' + id;
        connection.query(query, function(err, data) {
            if (err) throw err;
            cb();
        })
    }
}

module.exports = orm;
