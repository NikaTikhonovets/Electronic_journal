/**
 * Created by Ника Тихоновец on 29.03.2017.
 */
var orm = require("orm");
var config = require('../config');

var host = config.get('database:host'),
    user = config.get('database:user'),
    password = config.get('database:password'),
    database = config.get('database:database_name');

module.exports = orm.connect("mysql://"+ user+ ":" + password + "@" + host + "/" +database, function (err, db) {
    if (err) throw err;
});











/*
module.exports = function(app) {
    var opts = {
        database: database,
        protocol: "mysql",
        host: host,
        port: 3306,
        user: user,
        password: password,
        query: {
            pool: true,
            debug: true,
            strdates: false
        }
    };*/


 /*   app.use(orm.express(opts, {
        define: function (db, models, next) {
            models.user = db.define('user',require('../models/user') );
            db.sync();
            next();
        }
    }));
}*/