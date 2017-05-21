var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all(function(data) {
            cb(data);
        });
    },
    create: function(name, status, cb) {
        orm.create('burgers', name, status, cb)
    },
    update: function(id, cb) {
        orm.update(id, cb);
    }
}

module.exports = burger;
